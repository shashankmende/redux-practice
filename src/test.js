

import { createStore ,combineReducers} from "redux";

const initialState = {
    name:'Shashank',
    balance:0,
    mobile:8974562150,

}

function accountReducer(state=initialState,action){
    switch (action.type) {
        case 'deposit':
            
            return {...state,balance: state.balance+ +action.payload}
        case 'withdraw':
            return {...state,balance:state.balance- +action.payload}
        case "updateName":
            return {...state,name:action.payload}
        case "reset":
            return initialState
        default:
            return state
    }


}


function transactionReducer(state=[],action){
    // const {amount,type,date} = action.payload
    switch (action.type) {
        case 'ADD_TRANSACTION':
            

            return [...state,
                {
                    id:action.payload.id,
                    amount:action.payload.amount,
                    type:action.payload.type,
                    date:action.payload.date
                }

            ]
    
        default:
            return state
    }
}

const rootReducer = combineReducers({
    account:accountReducer,
    transaction:transactionReducer
})

const store = createStore(rootReducer)



export default store
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { withdraw,deposit ,updateName,reset} from '../../actions'

const Form = () => {
  
  // let data = useSelector(state=>state)
  let dispatch = useDispatch()
  const [deposistAmount,setDepositAmount] = useState()
  const [name,setName] = useState()
  const [transId,setTransId] = useState(0)

  return (
    <div className='container'>
      
      <div className='row'>
        <div className='col-4'>
          <input onChange={e=>setDepositAmount(e.target.value)} value={deposistAmount } className='form-control mt-5 mb-2 ' type='number' placeholder='Enter amount'/>
          </div>
          <div className='col-8 mt-5'>
          <button onClick={()=>{
              dispatch(deposit(deposistAmount));
              setTransId(transId+1)
              dispatch({type:"ADD_TRANSACTION",payload:{
                id:transId,
                amount:deposistAmount,
                date: new Date(),
                type:"Credit"
              }})
              setDepositAmount('')
          }}
          className='btn btn-primary col-2'>Deposit</button>


    <button onClick={()=>{
              dispatch(withdraw(deposistAmount));
              setTransId(transId+1)
              dispatch({type:"ADD_TRANSACTION",payload:{
                id:transId,
                amount:deposistAmount,
                date: new Date(),
                type:"Debit"
              }})
              setDepositAmount('')
          }}
          className='btn btn-danger col-2' style={{hieght:'100px'}}>withdraw</button>
          </div>
      </div>
      <div className='row m-2'>
        <div className='col-4 m-2'>
            <input
            type='text'
            placeholder='enter your name'
            value={name}
            className='form-control mb-2'
            onChange={e=>setName(e.target.value)}
            />
        <button
        onClick={()=>{
          dispatch(updateName(name))
          setTransId(transId+1)
          setName('')
        }}
        className='btn btn-success '>Update Name</button>
        </div>

      </div>
      <button className='btn btn-danger m-2'
      onClick={()=>{
        dispatch(reset())
      }}
      >Reset</button>
    </div>
  )
}

export default Form
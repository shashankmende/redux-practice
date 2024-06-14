

function deposit(amount){
    return {type:"deposit",payload:amount}
}

function withdraw(amount){
    return {type:'withdraw',payload:amount}
}

function updateName(name){
    return {type:'updateName',payload:name}
}



function reset(){
    return {type:'reset'}
}

module.exports.deposit = deposit
module.exports.withdraw = withdraw
module.exports.updateName=updateName
module.exports.reset = reset
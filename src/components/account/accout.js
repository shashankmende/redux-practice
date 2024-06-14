import React from 'react'
import { useSelector } from 'react-redux'

const Accout = () => {
    let data = useSelector(state=>state)
    const {account,transaction} = data
    console.log("data from account",data)
  return (
    <form className='container'>
        <h1 className='text-primary'>Account Component</h1>
        <table className='table table-bordered w-50'>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Balance</th>
                    <th>Mobile</th>
                </tr>
                        
            </thead>
            <tbody>
                <tr>
                    <td>{account.name}</td>
                    <td>{account.balance}</td>
                    <td>{account.mobile}</td>
                </tr>
            </tbody>
        </table>

        <h1 className='text-success'>Transactions Table</h1>
        <table className='table table-bordered w-50'>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Amount</th>
                    <th>Type</th>
                    <th>Date</th>

                </tr>

            </thead>
            <tbody>
               {transaction.map((tr,index)=>(
                <tr key={tr.id}>
                    <td>{tr.id}</td>
                    <td>{tr.amount}</td>
                    <td>{tr.type}</td>
                    <td>{tr.date.toString()}</td>
                </tr>
               ))}
            </tbody>
        </table>

    </form>
  )
}

export default Accout
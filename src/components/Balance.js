import React, { useContext } from 'react'

// Import the Global State
import { GlobalContext } from '../context/GlobalState';


export const Balance = () => {

     const { transactions } = useContext(GlobalContext);

    const transactionAmounts = transactions.map(transaction => transaction.transactionAmount);
     const balance = transactionAmounts.reduce((acc, item) => (acc += item), 0).toFixed(2);
    return (  
        <div>
            <h3>Current Balance</h3>
    <h1 id="balance">Rs.{balance}</h1>
        </div>
    )
}
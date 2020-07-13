import React from 'react';
import './Account.css';

function TransactionHistory() {
  return (
    <div >
       <h3>
           Transaction History 
       </h3>
       <ul className="list">
           <li className="plus">
               Project 1 income
                <span>$1000</span>
                <button  className="delete-btn">X</button>
           </li>
            <li className="minus">
                Project 1 Expense
                <span>-$1000</span>
                <button  className="delete-btn">X</button>
            </li>

       </ul>

    </div>
    
  );
}

export default TransactionHistory;

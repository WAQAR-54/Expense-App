import React ,{useState} from 'react';
import './Account.css';
//import { useState } from 'react';

function AddTransaction() {
  const [description, setdescription]= useState();
  const [transactionAmount , settransactionAmount]= useState();


  return (
    <div >
      <h3>Add New Transaction</h3>
      <form>
          <div className="form-control">
            <label htmlFor="Description">
            Description (Salary, Grocery etc)
                </label>
            <input type="text" 
                id="Description" 
                placeholder="Detail of Transaction"
                value={description}
                >
            </input>
          </div>
          <div className="form-control">
          <label htmlFor="Description">
          Transaction Amount (Income +, Expense - )
                </label>
            <input type="Number" 
                id="TransactionAmount" 
                placeholder="Enter Transaction Amount"
                value={transactionAmount}
                >
            </input>
            <button className="btn">Add Transaction</button>
          </div>
      </form>
    </div>
    
  );
}

export default AddTransaction;

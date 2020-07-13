import React from 'react';
import './Account.css';

function AddTransaction() {
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
                placeholder="Detail of Transaction">
            </input>
          </div>
          <div className="form-control">
          <label htmlFor="Description">
          Transaction Amount (Income +, Expense - )
                </label>
            <input type="Number" 
                id="TransactionAmount" 
                placeholder="Enter Transaction Amount">
            </input>
            <button className="btn">Add Transaction</button>
          </div>
      </form>
    </div>
    
  );
}

export default AddTransaction;

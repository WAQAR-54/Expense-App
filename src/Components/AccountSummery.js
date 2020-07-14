import React from 'react';
import './Account.css';

function AccountSummery() {
  return (
    <div className="inc-exp-container">
        <div>
            <h4>Income</h4>
            <p className="money-plus">
              $0.00
            </p>
        </div>
        <div>
            <h4>Expenses</h4>
            <p className="money-minus">
              $npm0.00
            </p>
        </div>

    </div>
    
  );
}

export default AccountSummery;

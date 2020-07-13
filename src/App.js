import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import Balance from './Components/Balance';
import AccountSummery from './Components/AccountSummery';
import TransactionHistory from  './Components/TransactionHistory';
import AddTransaction from './Components/AddTransaction';

function App() {
  return (
    <div >
            <Header/>
           <div className="container">
             <Balance></Balance>
             <AccountSummery></AccountSummery>
             <TransactionHistory></TransactionHistory>
             <AddTransaction></AddTransaction>
           </div>
          
    </div>
  );
}

export default App;

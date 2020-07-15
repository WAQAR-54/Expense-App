import React from 'react';
import './App.css';
import Header from './Components/Header';
import Balance from './Components/Balance';
import AccountSummery from './Components/AccountSummery';
import TransactionHistory from  './Components/TransactionHistory';
import AddTransaction from './Components/AddTransaction';

//import provider
import {GlobalProvider} from './context/GlobalState'
function App() {
  return (
    <div className="bgcontainer">
      <GlobalProvider >
       <Header />
        <div className="container">
          <Balance />
          <AccountSummery />
          <TransactionHistory />
          <AddTransaction />
        </div>
      </GlobalProvider>
    </div>
  );
}

export default App;

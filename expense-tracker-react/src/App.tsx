// import React from 'react';
import Header from './components/Header';
import Balance from './components/Balance';
import IncomeExpenses from './components/IncomeExpenses';
import TransactionList from './components/TransactionList';
import AddTransaction from './components/AddTransaction';

import { GlobalProvider } from './context/GlobalState';

import './App.css';

function App() {
    return (
        <GlobalProvider>
            <div className="app">
                <div className="app--container">
                    <div className="app--header-container">
                        <Header title='Expense Tracker' />
                    </div>
                    <div className="app--balance-container">
                        <Balance />
                    </div>
                    <div className="app--inc-exp-container">
                        <IncomeExpenses />
                    </div>
                    <div className="app--transaction-list-container">
                        <TransactionList />
                    </div>
                    <div className="app--add-transaction-container">
                        <AddTransaction />
                    </div>
                </div>
            </div>
        </GlobalProvider>
    );
}

export default App;

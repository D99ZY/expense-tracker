import React, { useState, useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import { Transaction } from '../context/types';
import { addTransaction } from '../context/actions';
import './AddTransaction.css';

const AddTransaction = () => {
    // Context
    const { dispatch } = useContext(GlobalContext);

    // State
    const [text, setText] = useState<string>('');
    const [amount, setAmount] = useState<number>(0);

    // Add transaction function
    const onSubmitHandler = (e: React.FormEvent) => {
        // Prevent page reload
        e.preventDefault();

        // Create new instance of transaction
        const newTransaction: Transaction = {
            id: Math.floor(Math.random() * 100000000),
            text: text,
            amount: amount
        };

        // Add transaction to array of transactions in global state
        dispatch(addTransaction(newTransaction));
    };

    return (
        <div className='add-transaction'>
            <h3>Add a New Transaction</h3>
            <form onSubmit={onSubmitHandler}>
                <div>
                    <label className='add-transaction--label' htmlFor='text'>Text</label>
                    <input 
                        className='add-transaction--input'
                        type='text' 
                        value={text} 
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setText(e.target.value)}
                        placeholder='Enter text...' 
                    />
                </div>
                <div>
                    <label className='add-transaction--label' htmlFor='amount'>Amount</label>
                    <input
                        className='add-transaction--input'
                        type='number' 
                        value={amount} 
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setAmount(parseInt(e.target.value))}
                        placeholder='Enter amount...' 
                    />
                </div>
                <button className='add-transaction--btn'>Add Transaction</button>
            </form>
        </div>
    );
};

export default AddTransaction;

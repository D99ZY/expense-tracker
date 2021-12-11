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
    const [isIncome, setIsIncome] =useState<boolean>(true);

    // 
    const checkboxHandler = (): void => {
        const input: HTMLInputElement = document.getElementById('transactionCheckbox') as HTMLInputElement;
        if (input.checked) {
            setIsIncome(false);
        }
        else {
            setIsIncome(true);
        }
    }

    // Add transaction function
    const onSubmitHandler = (e: React.FormEvent) => {
        // Prevent page reload
        e.preventDefault();

        // Make amount positive or negative
        const amountValue: number = isIncome ? amount : 0 - amount;

        // Create new instance of transaction
        const newTransaction: Transaction = {
            id: Math.floor(Math.random() * 100000000),
            text: text,
            amount: amountValue
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
                        placeholder='Enter Text' 
                    />
                </div>
                <div className='add-transaction--amount-container'>
                    <div>
                        <label className='add-transaction--label' htmlFor='amount'>Amount</label>
                        <input
                            className='add-transaction--input'
                            type='number' 
                            value={amount} 
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setAmount(parseInt(e.target.value))}
                            min='0'
                        />
                    </div>
                    <div>
                        <label className='add-transaction--label center'>Income | Expense</label>
                        <label className='add-transaction--switch'>
                            <input
                                type='checkbox'
                                id='transactionCheckbox'
                                onChange={checkboxHandler}
                            />
                            <span className='add-transaction--slider' />
                        </label>
                    </div>
                </div>
                <button className='add-transaction--btn'>Add Transaction</button>
            </form>
        </div>
    );
};

export default AddTransaction;

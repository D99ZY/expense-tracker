import React, { useState } from 'react';
import './AddTransaction.css';

const AddTransaction = () => {

    // State
    const [text, setText] = useState<string>('');
    const [amount, setAmount] = useState<number>(0);

    return (
        <div className='add-transaction'>
            <h3>Add a New Transaction</h3>
            <form>
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

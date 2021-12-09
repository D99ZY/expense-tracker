import { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import './Balance.css';

const Balance = () => {
    // Context
    const {
        state: { transactions }
    } = useContext(GlobalContext);

    // Get transaction amounts
    const amounts: number[] = transactions.map(transaction => transaction.amount);

    // Calculate total balance
    const total: number = Math.round((amounts.reduce((a, b) => a + b, 0) + Number.EPSILON) * 100) / 100;

    return (
        <div className='balance'>
            <h4 className='balance--title'>Your Balance</h4>
            <h2 className='balance--amount'>£{total.toFixed(2)}</h2>
        </div>
    );
};

export default Balance;

import { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

import './Balance.css';

const Balance = () => {

    const { transactions } = useContext(GlobalContext);

    const amounts: number[] = transactions.map(transaction => transaction.amount);
    const total: number = Math.round(((amounts.reduce((a, b) => a + b)) + Number.EPSILON) * 100) / 100;

    return (
        <div className='balance'>
            <h4 className='balance--title'>Your Balance</h4>
            <h2 className='balance--amount'>£{total.toFixed(2)}</h2>
        </div>
    );
};

export default Balance;

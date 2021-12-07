import { useContext } from 'react';
import Transaction from './Transaction';

import { GlobalContext } from '../context/GlobalState';

import './TransactionList.css';

const TransactionList = () => {

    const { transactions } = useContext(GlobalContext);

    return (
        <div className='transaction-list'>
            <h3 className='transaction-list--title'>History</h3>
            <ul className='transaction-list--list'>
                {transactions.map(transaction => (
                    <Transaction key={transaction.id} text={transaction.text} amount={transaction.amount} />
                ))}
            </ul>
        </div>
    );
};

export default TransactionList;

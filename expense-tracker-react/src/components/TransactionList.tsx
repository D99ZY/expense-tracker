import { useContext } from 'react';
import Transaction from './Transaction';
import { GlobalContext } from '../context/GlobalState';
import './TransactionList.css';

const TransactionList = () => {
    // Context
    const { 
        state: { transactions} 
    } = useContext(GlobalContext);

    return (
        <div className='transaction-list'>
            <h3 className='transaction-list--title'>History</h3>
            <ul className='transaction-list--list'>
                {transactions.length > 0 ? (
                    transactions.map(transaction => (
                        <Transaction 
                            key={transaction.id} 
                            id={transaction.id} 
                            text={transaction.text} 
                            amount={transaction.amount} 
                        />
                    ))
                ) : (
                    <span>No Transactions to Display</span>
                )}
            </ul>
        </div>
    );
};

export default TransactionList;

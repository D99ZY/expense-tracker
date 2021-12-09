import { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import { deleteTransaction } from '../context/actions';
import './Transaction.css';

interface TransactionProps {
    id: number;
    text: string;
    amount: number;
}

const Transaction: React.FC<TransactionProps> = ({ id, text, amount }) => {
    // Context
    const { dispatch } = useContext(GlobalContext);

    // Delete transaction from global state
    const deleteHandler = (id: number) => dispatch(deleteTransaction(id));

    // Determine amount sign
    const sign = amount < 0 ? '-' : '+';

    return (
        <li className={amount < 0 ? 'transaction--row neg' : 'transaction--row pos'}>
            <span>{text}</span>
            <span>{sign} £{Math.abs(amount)}</span>
            <button className='transaction--delete-btn' onClick={() => deleteHandler(id)}>X</button>
        </li>
    );
};

export default Transaction;

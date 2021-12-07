import './Transaction.css';

interface TransactionProps {
    text: string;
    amount: number;
}

const Transaction: React.FC<TransactionProps> = ({ text, amount }) => {

    const sign = amount < 0 ? '-' : '+';

    return (
            <li className={amount < 0 ? 'transaction--row neg' : 'transaction--row pos'}>
                <span>{text}</span><span>{sign} £{Math.abs(amount)}</span><button className='transaction--delete-btn'>X</button>
            </li>
    );
};

export default Transaction;

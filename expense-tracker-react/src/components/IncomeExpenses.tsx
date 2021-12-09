import { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import './IncomeExpenses.css';

const IncomeExpenses = () => {
    // Context
    const { state } = useContext(GlobalContext);

    // Get transaction amounts
    const amounts: number[] = state.transactions.map(transaction => transaction.amount);

    // Calculate total income
    const income: number = amounts
        .filter(item => item > 0)
        .reduce((a, b) => (a + b), 0);

    // Calculate total expenses
    const expense: number = amounts
        .filter(item => item < 0)
        .reduce((a, b) => (a + b), 0);

    return (
        <div className='inc-exp'>
            <div className='inc-exp--container'>
                <h4>Income</h4>
                <p className='inc-exp--amount pos'>+£{income.toFixed(2)}</p>
            </div>
            <div className='inc-exp--container'>
                <h4>Expenses</h4>
                <p className='inc-exp--amount neg'>-£{Math.abs(expense).toFixed(2)}</p>
            </div>
        </div>
    );
};

export default IncomeExpenses;

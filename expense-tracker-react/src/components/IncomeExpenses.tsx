import { useContext } from 'react';

import { GlobalContext } from '../context/GlobalState';

import './IncomeExpenses.css';

const IncomeExpenses = () => {

    const { transactions } = useContext(GlobalContext);

    const amounts: number[] = transactions.map(transaction => transaction.amount);

    const income: number = amounts
        .filter(item => item > 0)
        .reduce((a, b) => (a + b));

    const expense: number = amounts
        .filter(item => item < 0)
        .reduce((a, b) => (a + b));

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

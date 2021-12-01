// import React from 'react';
import './IncomeExpenses.css';

const IncomeExpenses = () => {
    return (
        <div className='inc-exp'>
            <div className='inc-exp--container'>
                <h4>Income</h4>
                <p id='inc-exp--amount--pos' className='inc-exp--amount pos'>+£0.00</p>
            </div>
            <div className='inc-exp--container'>
                <h4>Expenses</h4>
                <p id='inc-exp--amount--neg' className='inc-exp--amount neg'>-£0.00</p>
            </div>
        </div>
    );
};

export default IncomeExpenses;

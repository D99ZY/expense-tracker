import { Transaction, Action } from './types';

// Actions
export const addTransaction = (transaction: Transaction): Action => ({
    type: 'ADD_TRANSACTION',
    payload: transaction,
});

export const deleteTransaction = (id: number): Action => ({
    type: 'DELETE_TRANSACTION',
    payload: id,
});

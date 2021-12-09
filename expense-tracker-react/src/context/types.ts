import { Dispatch } from 'react';

// Types
export type Transaction = {
    id: number;
    text: string;
    amount: number;
};

export type GlobalState = {
    transactions: Transaction[];
};

// export type Action = {
//     type: string;
//     payload?: any;
// };

export type Action = 
    | { type: 'ADD_TRANSACTION'; payload: Transaction }
    | { type: 'DELETE_TRANSACTION'; payload: number };

export type Context = {
    state: GlobalState;
    dispatch: Dispatch<Action>;
};

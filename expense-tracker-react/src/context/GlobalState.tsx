import React, { createContext, useReducer } from "react";
import AppReducer from './AppReducer';
import { GlobalState, Context } from './types'

// Initial state
const initialState: GlobalState = {
    transactions: [
        // Example default values
        // { id: 1, text: 'Salary', amount: 500 },
        // { id: 2, text: 'Book', amount: -20 },
        // { id: 3, text: 'Shoes', amount: -50 },
    ],
};

// Create context
export const GlobalContext = createContext<Context>({
    state: initialState,
    dispatch: () => undefined,
});

// Provider component
export const GlobalProvider: React.FC = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    return (
        <GlobalContext.Provider value={{ state, dispatch }}>
            {children}
        </GlobalContext.Provider>
    );
};

import { createContext, useReducer } from "react";

const initialState ={
    budget : 5000,
    expenses : [
        {id:1,name:'Travel',cost:600},
        {id:2,name:'food',cost:100}
    ]
};

const AppReducer = (state, action) => {
    switch(action.type){
        case 'ADD_EXPENSE':
            return {
                ...state,
                expenses : [...state.expenses, action.payload]
            }
        case 'DELETE_EXPENSE':
             return {
                ...state,
                expenses : state.expenses.filter((item)=> item.id !== action.payload)
                }
        
        default:
            return state;
    }
}


export const AppContext = createContext()

export const AppProvider = (props) => {
    const [state, dispatch] = useReducer(AppReducer,initialState)

    return (
    <AppContext.Provider value={{
        budget : state.budget,
        expenses : state.expenses,
        dispatch
    }}>
        {props.children}
    </AppContext.Provider>
    )
}
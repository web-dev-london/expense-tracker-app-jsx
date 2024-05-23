import { createContext, useState } from "react";
import { PropTypes } from 'prop-types';

const formData = {
    type: 'income',
    amount: 0,
    description: ''
}

export const GlobalState = createContext(null)

const GlobalContext = ({ children }) => {
    const [form, setForm] = useState(formData);
    const [value, setValue] = useState('value');
    const [expense, setExpense] = useState(0);
    const [income, setIncome] = useState(0);
    const [sum, setSum] = useState([]);

    const handleSubmit = (currentForm) => {
        if (!currentForm.description || !currentForm.amount) {
            return;
        }
        setSum([
            ...sum,
            { ...currentForm, id: Date.now() },
        ])
    }


    const values = {
        form,
        setForm,
        value,
        setValue,
        expense,
        setExpense,
        income,
        setIncome,
        sum,
        setSum,
        handleSubmit,
    }

    return (
        <GlobalState.Provider value={values} >
            {children}
        </GlobalState.Provider >
    );
}

GlobalContext.propTypes = {
    children: PropTypes.node.isRequired,
}

export default GlobalContext;
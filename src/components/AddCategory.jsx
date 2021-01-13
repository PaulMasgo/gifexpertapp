import React, { useState } from 'react';
import PropTypes from 'prop-types';


const AddCategory = ({ setCategoryFunc }) => {

    const [ inputValue, setInputValue ] = useState('');

    const submitInput = (e) => {
        // prevenir el reinicio del formulario
        e.preventDefault();

        if (inputValue.trim().length === 0) {
            return;
        }

        // llamando a la funcion del component GifExpertApp
        // se como parametro el valor del input
        setCategoryFunc(cats => [ inputValue, ...cats ]);
        setInputValue('');
    }

    return (
        <>
            <form onSubmit={ submitInput }>
                <input type="text" value={ inputValue } onChange={ (e) => setInputValue(e.target.value) } />
            </form>
        </>
    )
}

// validando que el proptype sea obligatorio
AddCategory.propTypes = {
    setCategoryFunc: PropTypes.func.isRequired
}

export default AddCategory;

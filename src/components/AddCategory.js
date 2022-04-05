import React, { useState } from 'react'
import PropTypes from 'prop-types'

export const AddCategory = ({ setCategories }) => {
    const [inputValue, setInputValue] = useState('')

    const handleInputChange = (e) => {
        setInputValue(e.target.value)
    }

    const handleSubmit = (e) => {
        // console.log('Submit hecho');
        e.preventDefault()

        if (inputValue.trim().length > 2) {
            setCategories(categories => [inputValue, ...categories])
        }
    }

    return (
        <form onSubmit={ handleSubmit }>
            <input onChange={ handleInputChange } value={ inputValue } type="text" />
        </form>
    )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}
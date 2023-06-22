import React from "react";
import { useState } from "react";
import {PropTypes} from "prop-types";

export const Input = ({addCategory}) => {

    const [inputValue, setInputValue] = useState("")


    const handleInputChange = (event) => {
        setInputValue(event.target.value)
        console.log(inputValue)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        if(inputValue.trim().length <= 1) return;
        addCategory(inputValue.trim())
        setInputValue('')
        
    }

  return (
    <form id="submitForm" onSubmit={handleSubmit} aria-label="form">
        <input 
    type="text"
    placeholder="Search gif"
    value={ inputValue }
    onChange={(event)=> handleInputChange(event)}
     />
    </form>
    
  )
}

Input.propTypes = {
  addCategory: PropTypes.func.isRequired,
}

import React from "react";
import { useState } from "react";

export const Input = () => {

    const [inputValue, setInputValue] = useState("")

    const handleInputChange = (event) => {
        setInputValue(event.target.value)
    }

    const onSubmit = (event) => {
        event.preventDefault()
        console.log(inputValue)
    }

  return (
    <form 
    onSubmit={(event)=> onSubmit(event)}
    >
        <input 
    type="text"
    placeholder="Buscar Gifs"
    value={inputValue}
    onChange={(event)=> handleInputChange(event)}
     />
    </form>
    
  )
}

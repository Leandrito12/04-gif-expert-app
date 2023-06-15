import React from "react"
import { useState } from "react"
import { Input } from "../Input/Input"


export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['one punch', 'two punch', 'three punch'])

    const addCategory = () =>{
        setCategories(['valorant', ...categories])
    }


    return (
    <>
    <h1>GifExpertApp</h1>
    <Input/>
    <button onClick={addCategory}>Agregar</button>

    <ol>
        {categories.map((category, index) =>{
           return <li key={index}>{category}</li>
        })}
    </ol>

    </>)
}
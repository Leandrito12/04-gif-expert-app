import React, { useRef } from "react"
import { useState } from "react"
import { Input, GifGrid } from "../index"



export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['simpsons'])
    const formRef = useRef(null)

    const addCategory = (newCategory) =>{
        if(categories.includes(newCategory)) return;
        setCategories([newCategory, ...categories])
    }


    return (
    <>
    <h1>GifExpertApp</h1>

    <Input addCategory={addCategory}/>

    <button form="submitForm" type="submit">Add</button>

        {categories.map((category) =>(
            <GifGrid key={category} category={category}/>
        )        
        )}

    </>)
}
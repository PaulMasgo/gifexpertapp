import React, { useState } from 'react';
import AddCategory from './AddCategory';
import GifContent from './GifContent';

const GifExpertApp = () => {
    
    const [categories, setCategories] = useState(['Naruto']);
    
    const addCategory = (nameCategory) => {
        setCategories([
            ...categories,nameCategory
        ])
    }

    return (
        <>
            <h2>GifExpertApp</h2>
            <hr/>
            <AddCategory setCategoryFunc={ addCategory } />
            <button onClick={addCategory} >Agregar</button>
            <ol>
                {
                    categories.map((item,index) => <GifContent category={item} />)
                }
            </ol>
        </>
    )
}

export default GifExpertApp;
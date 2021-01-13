import React, { useState } from 'react';
import AddCategory from './AddCategory';
import GifContent from './GifContent';

const GifExpertApp = () => {

    const [ categories, setCategories ] = useState([]);

    return (
        <>
            <h2>GifExpertApp</h2>
            <hr />
            <AddCategory setCategoryFunc={ setCategories } />
            <button onClick={ setCategories } >Agregar</button>
            <ol>
                {
                    categories.map((item, index) => <GifContent key={ index } category={ item } />)
                }
            </ol>
        </>
    )
}

export default GifExpertApp;

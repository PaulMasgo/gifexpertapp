import React from 'react';
import GifContentUnit from './GifContentUnit';
import useFetchHooks from '../hooks/useFetchHooks'

const GifContent = ({ category }) => {

    const { data, loading } = useFetchHooks(category);

    return (
        <>
            <h3>{ category }</h3><br />
            {loading && <p>Loading ....</p> }
            <div className="content-card" >
                {
                    data.map(img => (
                        <GifContentUnit key={ img.id } image={ img } />
                    ))
                }
            </div>
        </>
    )
}

export default GifContent;

import React from 'react';

const GifContentUnit = ({ image }) => {

    return (
        <div className="card animate__fadeIn animate__delay-5s 5s" >
            <img src={ image.url } alt="" />
            < h3 > { image.title } </h3 >
        </div >
    )
};

export default GifContentUnit;

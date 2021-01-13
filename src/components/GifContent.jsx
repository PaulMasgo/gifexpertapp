import React,{useEffect} from 'react';

const GifContent = ({category}) => {
    
    useEffect(() => {
        getgifs();
    },[])

    const getgifs = async () => {
        const url ='https://api.giphy.com/v1/gifs/search?api_key=SxNDD1wXvHqQ1rRdPJJqDsjT4iHgcXo8&q=drangon&limit=10'
        const callapi = await fetch(url);
        const { data } = await callapi.json();
        
        const gifList = data.map( img => {
            return{
                id:img.id,
                title:img.title,
                url:img.images.downsized_medium.url
            }
        })

        console.log(gifList);

    }
    
    getgifs();

    return (
        <>
        <div>
            <h3>{category}</h3>
        </div>
        </>
    )
}

export default GifContent;
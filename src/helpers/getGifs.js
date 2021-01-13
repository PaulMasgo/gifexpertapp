
const getgifs = async (category) => {

    const url = `https://api.giphy.com/v1/gifs/search?api_key=SxNDD1wXvHqQ1rRdPJJqDsjT4iHgcXo8&q=${encodeURI(category)}&limit=10`;
    const callapi = await fetch(url);
    const { data } = await callapi.json();

    const gifList = data.map(img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images.downsized_medium.url
        }
    });

    return gifList;
}

export default getgifs;

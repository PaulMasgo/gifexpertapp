import { useEffect, useState } from "react";
import getgifs from "../helpers/getGifs";


const useFetchHooks = (category) => {

    const [ statehook, setStatehook ] = useState({ data: [], loading: true });

    useEffect(() => {
        getgifs(category).then(imgs => {
            setStatehook({ data: imgs, loading: false });
        });
    }, [ category ]);

    return statehook;

}

export default useFetchHooks;

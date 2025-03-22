import axios from "axios";
import { useEffect } from "react";

const AxiosFetch = () => {
    //fetching movie data using axios;
    // api key = dOed228b

    const API = "http://www.omdbapi.com/?i=tt3896198&apikey=d0ed228b&s=avengers&page=1";

    //fetch function;
    const fetchMovieData = async () => {
        try {
            //get request;
            const response = await axios.get(API);
            console.log(response.data.Search);
        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        fetchMovieData();
    }, [])

    return (
        <h1>
            hello
        </h1>
    )
}

export default AxiosFetch;
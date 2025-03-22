import axios from "axios";

//axios;
const api = axios.create({
    baseURL: "http://www.omdbapi.com/", //url's base;
});


const getData = () => {
    return api.get("?i=tt3896198&apikey=d0ed228b&s=avengers&page=1"); //remaining part of url;
}

export default getData;
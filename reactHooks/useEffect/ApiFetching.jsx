/* eslint-disable no-unused-vars */
import { useEffect } from 'react';
import './apifetching.css';
import { useState } from 'react';

const ApiFetching = () => {
    const API = 'https://pokeapi.co/api/v2/pokemon/pichu';
    const [apiData, setApiData] = useState(null);
    const [loading, setLoading] = useState(true); //loading state will true until we get our data
    const [err, setErr] = useState(null); //to handle errors;

    //when we get our data from api the loading state will be false;
    const fetchThePokemon = () => {
        fetch(API).then((resp) => resp.json()).then((data) => { setApiData(data); setLoading(false) }).catch((error) => { setErr(error); setLoading(false) });
    }

    useEffect(() => {
        fetchThePokemon();
    }, []);

    if (apiData) {
        return (
            <div className="container">
                <h1>lets catch pokemon</h1>

                <div className="box">
                    <img className="pokeimage" src={apiData.sprites.other.dream_world.front_default} alt={apiData.name} />
                    <div className="name">
                        <h2>{apiData.name}</h2>
                    </div>
                </div>
            </div>
        );
    }

    if (loading) {
        return (
            <h1>Loding</h1>
        )
    }

    if(err){
        return(
            <h2>Error : {err.message}</h2>
        )
    }
}

export default ApiFetching;

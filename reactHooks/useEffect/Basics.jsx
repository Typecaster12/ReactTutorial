import { useEffect } from "react";
import { useState } from "react"

const Basics = () => {
    const [count, setCount] = useState(0);
    //this Effect will run only first time when the page firstly loads..
    //because of empty dependency array;
    // useEffect(() => {
    //     console.log("Count value: ", count);
    // }, []);


    //This effect will run every time page re-renders:
    //because no dependency is passed;
    // useEffect(() => {
    //     console.log("Count value: ", count);
    // });


    //This effect will only runs when the count(its dependency value) will we modified..
    useEffect(() => {
        console.log("Count value: ", count);
    }, [count]);

    return (
        <div>
            <h1>Use Effect</h1>
            <p>count: {count}</p>
            <button onClick={() => setCount(count + 1)}>Increse Me</button>
        </div>
    )

}

export default Basics

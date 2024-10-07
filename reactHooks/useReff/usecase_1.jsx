import { useRef } from "react";
import { useEffect } from "react";
import { useState } from "react";

//useing useRef we can prevent any variable to re-initialize while re-rendering the component 
const Usecase_1 = () => {
    //because of count's value changes whole component gets re-render;
    const [count, setCount] = useState(0);
    console.log("Rendering..."); //just to check re-rendering;

    let a = 1; //global var whose value we will change every time component gets re-render;
    //so, the value will increaes but when the component gets re-render whole value gets re-initializ;
    useEffect(() => {
        // a = a + 1;
        console.log(`Value is ${a}`);
    });

    //to tackle above situation; 
    //we use useReff => this will prevent the value to re-render so it will not re-initialises;
    const b = useRef(1);
    useEffect(() => {
        b.current = b.current + 1;
        console.log(`value is: ${b.current}`);
        //useRef returns an object with a single property: that is current
        //initial and the new value are of .current property thats why we use .current here;
    });

    const incBtnValue = () => {
        setCount(count => count + 1);
    }

    return (
        <div className="container">
            <h2>Count: {count}</h2>
            <button onClick={incBtnValue}>Increse</button>
        </div>
    )
}

export default Usecase_1;

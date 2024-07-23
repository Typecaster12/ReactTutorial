import { useState } from "react"
import '../comp.css';

function Practise() {
    console.log("this is patrent component");
    const [count, setCount] = useState(0);
    return (
        <>
            <div className="main-div">
                <div>The Count : {count}</div>
                <button onClick={() => setCount(count + 1)}>click me</button>
            </div>

            <ChildComp />
        </>
    )
}

function ChildComp() {
    console.log("This is Child Component");
    return <div>
        <h2>Child Component</h2>
    </div>
}

export default Practise;
//functions which starts from 'use' keyWords are known as HOOKS in react;

//when the data will be updated or will be change in future then there we use STATES;

//syntax => const [count, setCount] = useState(0);
// Here, count is the current state(state variable which will be chnaged/updated);
// setCount is a function which updates the state variable(count);
// useState(0) is the keyword for states in which 0 is the initial value of the state variable;
// initial val can be anything not only 0;

// so if the state of parent component is changed then the child inside it will re-render again!

//Beasue of <React.StrictMode> we get double output values in the console;

//For the very first time useState(0) this code works,
//after that react will use the current state of the component to perform the operation given;
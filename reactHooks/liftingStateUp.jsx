/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */



//lifting state up means: If the child comp have a state and that same state is required by other child comp;

//so in that case child cannot share their data and creating same state for two different child comps is not a good practise;

//so to tackle this we can lifth the state up to the same parent component;
//which means we can create a state in the parent which is accessable for both the child component(remember both the child will have same perent component);

//defination => 
// "Lifting state up" in React means moving a piece of state from a child component to a common parent component. This is done so that multiple child components can share and synchronize the same state.

//without lifting the state up;
//in this case both child req same state;
const Child1 = () => {
    const [value, setValue] = useState(0);
    return <div>Child 1 Value: {value}</div>;
};

const Child2 = () => {
    const [value, setValue] = useState(0);
    return <div>Child 2 Value: {value}</div>;
};

export const Parent = () => (
    <div>
        <Child1 />
        <Child2 />
    </div>
);

import { useState } from "react";
//with lifting the state up;
export const LiftingParent = () => {
    const [value, setValue] = useState(0);

    return (
        <>
            <Child3 value={value} />
            <Child4 value={value} />
            <button onClick={() => setValue(value + 1)}>Increase Value</button>
        </>
    )
}

const Child3 = ({ value }) => <div>Child 1 Value: {value}</div>;
const Child4 = ({ value }) => <div>Child 2 Value: {value}</div>;
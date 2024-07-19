//In react eventHandeling is same as java script;

const Example = () => {

    //function to handel the event;
    const handelIt = (event) => {
        console.log(event) //event = SyntheticBaseEvent..
        alert("Button clicked!");
    }

    return (
        <>

            {/* //at this point do not call the function(do not write like this.. handelIt()) because.
            //if we do soo the function will automatically runs without any click. */}
            {/* this type is called "Function Component With Named Function" */}
            <button onClick={handelIt}>Click me!</button>

            {/* but */}

            {/* while using fatArrow function in side element to handel the event.. we need to call the function or else it will not run..  */}
            {/* when we handel event like this.. react will not pass the eventObject(SyntheticBaseEvent) */}
            {/* if we want so we can pass the parameter by our own... onClick={(event) => handelIt(event) */}
            <button onClick={() => handelIt(event)}>Click me 2!</button>

            {/* also write this.. and Hello There will be consoled log.. */}
            <button onClick={() => handelIt("Hello There")}>Click me 3!</button>
        </>
    );
};

export default Example;

// In react (event) The event object we get is not the exact eventObject just like javascript..
// In react the eventObject is kinda wrapped in side a wrapper and that wrapper is known as SyntheticBaseEvent..
// Use of SyntheticBaseEvent => So that the event behave simillarly in all the browsers..
import { useRef } from "react";
import './form.css';

// In React, the useRef hook is like a way to store and access data without causing your component to re-render.
const UnControlledForm = () => {

    //null is the initial value here;
    //and that initial value is the value of current property present inside the object which we get when we log the username;
    const username = useRef(null);
    const password = useRef(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(username.current.value);
        console.log(password.current.value);
        console.log(username);
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                {/* here after refering above var's initail value will be the text inside the the input tag(username) */}
                <input type="text" id="username" ref={username} />
                <input type="text" id="username" ref={password} />
                <button className="btn">Submit</button>
            </form>
        </>
    )
}

export default UnControlledForm;

//conclusion => if we want data of any element we can simply create var = useRef(initial value) and reffer this to the element whose data we want;

//.current we doit because the initail value and the new is assigned to the current property;

// useRef returns an object with a single property: that is current

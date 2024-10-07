import { useEffect, useRef } from "react";

const Usecase_2 = () => {
    //using useRef we can also get the refference of any element without and DOM manipulation;
    const refference = useRef();
    //now we have button's refference, we can now do anything with button;
    // eg => 

    useEffect(() => {
        refference.current.style.padding = '12px 24px';
        refference.current.style.border = 'none';
        refference.current.style.backgroundColor = 'red';
        refference.current.style.color = 'black';
        refference.current.style.cursor = 'pointer';
    });

    return (
        <div className="container">
            <h1>UseReff Tutorial</h1>
            <button ref={refference} className="btn">
                Change Me!
            </button>
        </div>
    )
}

export default Usecase_2;

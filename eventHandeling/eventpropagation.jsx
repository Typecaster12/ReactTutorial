//Event Propagation is the process of how events propagates or travels through DOM.
//In React there are three types of phsases.

//Capturing Phase
//Bubbling Phase(The Default one)..
//Target Phase

function EventPropagation() {

    const handelParent = () => {
        console.log("Parent is clicked!");
    }

    const handelDivClick = () => {
        // event.stopPropagation();
        console.log("DivClickd!");
    }

    const handelBtnClick = () => {
        // event.stopPropagation(); //stops the event to propagte to parent div.
        console.log("buttonClicked!");
    }

    return (
        //for the default one(The Bubbling phase);

        // <div className="parent" onClick={handelParent}>
        //     <div className="handelDiv" onClick={handelDivClick}>
        //         <button onClick={handelBtnClick}>Click Me</button>
        //     </div>
        // </div>

        //for capturing phase;
        <div className="parent" onClickCapture={handelParent}>
            <div className="handelDiv" onClickCapture={handelDivClick}>
                <button onClickCapture={handelBtnClick}>Click Me</button>
            </div>
        </div>
    );
}

export default EventPropagation;
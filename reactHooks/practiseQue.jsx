/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
function PractiseQue() {
    const users = [
        { name: "Harsh", age: 25 },
        { name: "Molu", age: 20 },
        { name: "Krish", age: 15 },
        { name: "Khushi", age: 20 }
    ]



    return (
        <div className="main-div">
            <h1>Users List!</h1>
            <ul>
                {users.map((item, index) => {
                    return (
                        <li key={index}>
                            {item.name} - {item.age}
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

//same que using useState;
import { useState } from "react";
function PractiseQue() {
    // const users = 

    const [users, setUsers] = useState([
        { name: "Harsh", age: 25 },
        { name: "Molu", age: 20 },
        { name: "Krish", age: 15 },
        { name: "Khushi", age: 20 }
    ]);

    return (
        <div className="main-div">
            <h1>Users List!</h1>
            <ul>
                {users.map((item, index) => {
                    return (
                        <li key={index}>
                            {item.name} - {item.age}
                        </li>
                    )
                })}
            </ul>
        </div>
    );
}

export default PractiseQue;
//The initial value passed inside the useState() is depends upon the type of data we are working on
//here we have an array so we passed an entire arry as the initial value;
//and perform the operations on that initial value;
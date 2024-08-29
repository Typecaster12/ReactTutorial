import { useEffect, useState } from "react";

const Challenge = () => {
    const [count, setCount] = useState(0);
    const [name, setName] = useState('');

    useEffect(() => {
        console.log("Name is :", name);
    }, [name]);

    useEffect(() => {
        document.title = `Count: ${count}`;
    }, [count]);

    return (
        <div>
            <h1>Use Effect</h1>
            <p>count is: {count}</p>
            <button onClick={() => setCount(count + 1)}>Increse Me</button>

            <p>Name is : {name}</p>
            <input type="text" id="inp" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
    );

}

export default Challenge;

/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";

const CleanUpFunc = () => {

  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);



  //count1
  //in this case effect will run only one time as dependency is not given;
  useEffect(() => {
    const interval = setInterval(() => {
      // setCount((prev) => prev + 1);
      setCount(count + 1);
    }, 1000);

    return () => clearInterval(interval); //clear every time and then re-run so avoid the memory leaks;
  }, []);

  //count2
  //without passing the dependencies effect will run;
  useEffect(() => {
    const timer = setInterval(() => {
      setCount2((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(timer); //clear every time and then re-run so avoid the memory leaks;
  }, []);



  return (
    <div className="parent">
      <p>Second Count is: {count}</p>

      <p>Second Count is: {count2}</p>
    </div>
  )
}

export default CleanUpFunc;

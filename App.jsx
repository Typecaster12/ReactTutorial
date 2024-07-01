//react fragments
// import { Fragment } from "react";

export const Cards = () => {
  return (
    // <div> '{/*this div is extra and had to remove this we use fragments*/}'
    //   {/*this is the method to call/use this components
    //  this compo can be call multiple times; */}
    //   <TheComponent />
    //   <TheComponent />
    //   <TheComponent />
    //   <TheComponent />
    // </div>

    // <Fragment>
    //   <TheComponent />
    //   <TheComponent />  {/*Now we can call multiple elements without any parent div*/}
    //   <TheComponent />
    //   <TheComponent />
    // </Fragment>

    //Also written like this;
    //for this method import { Fragment } from "react"; is not required;
    <>
      <TheComponent />
      <TheComponent />
      <TheComponent />
      <TheComponent />
      <TheComponent />
      <TheComponent />
    </>
  );
};

//the component function;
const TheComponent = () => {
  return (

    //as jsx returns only one element so always wrap the elements inside single parent element;
    <div>

      <div>
        <img src="public/img.jpg" alt="" height="40%" width="40%" />
      </div>

      <h2>IronMan The Dead Hero!</h2>
      <h3>Ratings: 9.9</h3>
      <p>Reviews: Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit possimus nihil quo animi facilis quis dolore nisi nam placeat aut.</p>

    </div>
  );
};







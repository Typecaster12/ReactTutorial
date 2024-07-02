//Dynamic Values in react..
//here we can write JS in XML and that is known as Dynamic value;
//we can write js in curly braces {};

export const Cards = () => {
  return (
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

  // these are Dynamic values using variables
  let name = 'IronMan The Dead Hero!'; 
  let Rating = 9.9; 
  let Review = 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit possimus nihil quo animi facilis quis dolore nisi nam placeat aut.'; 

  //Function calls
  const movieType = () => {
    let movType = "Action/Emotional";
    return movType;
  };

  return (
    <div>

      <div>
        <img src="public/img.jpg" alt="" height="40%" width="40%" />
      </div>

      {/* by variables */}
      <h2>Name: {name}</h2> {/* in curly braces used to write js */}
      <h3>Ratings: {Rating}</h3>
      <p>Reviews: {Review}</p> {/* the values written in {} is known as dynamic value */}

      {/* by expresions */}
      <h3>Ratings: {2 + 4.5}</h3> {/* This is Dynamic value using Js Expresions which produce some value */}

      {/* Dynamic Values Using Function calls */}
      <h3>MovieType: {movieType()}</h3>

    </div>
  );
};









//Conditionals in JS
//there are 4 ways to us econditionals Operator in react;


export const Cards = () => {
  return (
    <>
      <TheComponent />
    </>
  );
};

//the component function;
const TheComponent = () => {

  let age = 60;

  //the conditionals
  //type1 => we can return whole component one if it satisfy the condition and the other one if not;
  //but type1 does not follows DIY

  // if (age < 18) {
  //   return (
  //     <div>

  //       <div>
  //         <img src="public/img.jpg" alt="" height="40%" width="40%" />
  //       </div>

  //       <h2>Name: Iron Man!</h2>
  //       <h4>Summary: Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt iure iste repudiandae quas, libero consectetur aperiam architecto natus, repellendus voluptatibus aliquam. Aspernatur fugit sed non?</h4>

  //       {/* so the idea is to use the Conditionals for button, if the age of viewer is greater than 18 then he/she can watch the movies else not; */}
  //       <button>Not Available</button>

  //     </div>
  //   );
  // }

  // //if the age is above or equal to 18;
  // return (
  //   <div>

  //     <div>
  //       <img src="public/img.jpg" alt="" height="40%" width="40%" />
  //     </div>

  //     <h2>Name: Iron Man!</h2>
  //     <h4>Summary: Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt iure iste repudiandae quas, libero consectetur aperiam architecto natus, repellendus voluptatibus aliquam. Aspernatur fugit sed non?</h4>

  //     {/* so the idea is to use the Conditionals for button, if the age of viewer is greater than 18 then he/she can watch the movies else not; */}
  //     <button>Watch Now</button>

  //   </div>
  // );



  //method 2 => we can use ternary operator;
  // return (
  //   <div>

  //     <div>
  //       <img src="public/img.jpg" alt="" height="40%" width="40%" />
  //     </div>

  //     <h2>Name: Iron Man!</h2>
  //     <h4>Summary: Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt iure iste repudiandae quas, libero consectetur aperiam architecto natus, repellendus voluptatibus aliquam. Aspernatur fugit sed non?</h4>

  //     <button>{age >= 18 ? "watch Now" : "Not Available"}</button>

  //   </div>
  // );



  //method3 => For clean code we can follow this step;
  let canWatch = "Not Available";
  if (age >= 18) canWatch = "Watch Now";


  //method4 => fucntion in dynamic value;
  const willWatch = () => {
    if (age >= 18) return "Watch Now";
    return "Not available";
  }

  return (
    <div>

      <div>
        <img src="public/img.jpg" alt="" height="40%" width="40%" />
      </div>

      <h2>Name: Iron Man!</h2>
      <h4>Summary: Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt iure iste repudiandae quas, libero consectetur aperiam architecto natus, repellendus voluptatibus aliquam. Aspernatur fugit sed non?</h4>

      {/* this process follows Dynamic value's concept; */}
      <button>{canWatch}</button>

      {/*method 4=> by passig the function in daynmic value*/}
      <button>{willWatch()}</button>
    </div>
  );
};









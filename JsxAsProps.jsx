//coding chlng how to pass jsx as props;
export function Profile() {
  return (
    <div>
      <p>Profile Cards Challenge</p>


      {/* comp no1 */}
      <ProfileCard
        //props
        name="Harsh"
        age={21}  //in react number can be passed like this only;
        greeting={

          //we can pass JSX inside props also like this;
          <div>
            <strong> Hi Harsh, Have a nice day!</strong> 
          </div>
        }
      >

        <p>Hobbies: Cricket, Reading</p>
        <button>Contact</button>

      </ProfileCard>

      {/* comp no2 */}
      <ProfileCard
        //props
        name="Molu"
        age={22}
        greeting={
          <div>
            <strong> Hi Molu, Have a nice day!</strong>
          </div>
        }
      >

        <p>Hobbies: Cricket, Reading</p>
        <button>Contact</button>

      </ProfileCard>

    </div>
  );
}

//To show the components first make ProfileCards function;
function ProfileCard(props) {
  const { name, age, greeting } = props;

  return (
    <>
      <h1>The Name is:{name}</h1>
      <h3>The age is:{age}</h3>
      <h4>{greeting}</h4>
      <p>{props.children}</p>
    </>
  );
}

// so if there is nested elements inside the child component we can access them using .children keyword

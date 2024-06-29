//basic card using react..

export const Greet = () => {
  return ( //we cannot return these multiple items but if w they have same parent i.e. only one element to return then react will not throw error
    <div>
      {/* no matter how many elements are there in parent tag, but in JSX react will only return one element i.e. the parent element(child element can have any number); */}
      <img src="public/img.jpg" alt="" height="35%" width="35%" />
      <h2>Name: Transformer Prime</h2>
      <h3>Rating: 8.5</h3>
      <p>sumamry: Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque ex voluptates quaerat rerum at voluptatibus. Delectus accusamus quidem repudiandae facere.</p>
    </div>

  );
};
export const TheChild = (props) => {
    //this is destructuring;
    // const { data } = props;
    
    //and we can further destructure the data into its elements present inside it;
    const {id, name, sirname} = props.data;
    // const {name, sirname} = props;
    return(
        <li>
            <h1>The name is: {name}</h1>
            <h3>The Sirname is: {sirname}</h3>
        </li>
    )
};
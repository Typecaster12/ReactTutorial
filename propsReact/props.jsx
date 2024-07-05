//props in js;
//so, while using the .map() method the better way is no to define the process all in side the return;
//but predefine the process and use it as component in map() mehthod;
export const SeriesCards = (props) => {
    //props are the properties we have given to this component to access the data of parent
    return (
        <li> {/* Here key is not req as we have already gave key to <ul/> */}
            <div>
                <img src={props.value.img_url} alt="" height='40%' width='40%' />
            </div>

            <h2>Name: {props.value.name}</h2>
            <h3>Rating: {props.value.rating}</h3>
            <h4>Description: {props.value.description}</h4>
            <p>Genre: {props.value.genre}</p>
            <p>Cast: {props.value.cast}</p>

            <a href={props.value.watch_url} target='_blank'>
                <button>Watch Now!</button>
            </a>
        </li>
    )
}
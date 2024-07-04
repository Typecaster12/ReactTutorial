//In react we donot use for loops. We use .map() method instead;
//here we first create a folder called api in src
//then make file with .json extension
//add the data to it which we have to use;


//importing the json data
import seriesData from './api/seriesData.json'; //we can directly import .json file without exporting it;

const Netflix = () => {
    return (
        <ul>
            {/* looping here */}

            {
                seriesData.map((value) => {
                    return (
                        // we have to give key to li or elese react throws an error 
                        //these keys are given to differentiate the elements;
                        //each li should have its own(uique) key;
                        <li key={value.id}>
                            <div>
                                <img src={value.img_url} alt="" height='40%' width='40%' />
                            </div>

                            <h2>Name: {value.name}</h2>
                            <h3>Rating: {value.rating}</h3>
                            <h4>Description: {value.description}</h4>
                            <p>Genre: {value.genre}</p>
                            <p>Cast: {value.cast}</p>

                            <a href={value.watch_url} target='_blank'>
                                <button>Watch Now!</button>
                            </a>
                        </li>
                    );
                })
            }
            {/* <li>


                <div>
                    <img src={seriesData[0].img_url} alt="" height='40%' width='40%' />
                </div>

                <h2>Name: {seriesData[0].name}</h2>
                <h3>Rating: {seriesData[0].rating}</h3>
                <h4>Description: {seriesData[0].description}</h4>
                <p>Genre: {seriesData[0].genre}</p>
                <p>Cast: {seriesData[0].cast}</p>

                <a href={seriesData[0].watch_url} target='_blank'>
                    <button>Watch Now!</button>
                </a>

                
            </li> */}

            {/* this process donot follow diy rule, so for this we use looping (.map() method) */}

            {/* <li>


                <div>
                    <img src={seriesData[1].img_url} alt="" height='40%' width='40%' />
                </div>

                <h2>Name: {seriesData[1].name}</h2>
                <h3>Rating: {seriesData[1].rating}</h3>
                <h4>Description: {seriesData[1].description}</h4>
                <p>Genre: {seriesData[1].genre}</p>
                <p>Cast: {seriesData[1].cast}</p>

                <a href={seriesData[1].watch_url} target='_blank'>
                    <button>Watch Now!</button>
                </a>


            </li> */}
        </ul>
    );
};

export default Netflix;

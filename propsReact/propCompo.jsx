//In react we donot use for loops. We use .map() method instead;
//here we first create a folder called api in src
//then make file with .json extension
//add the data to it which we have to use;


//importing the json data
import seriesData from '../api/seriesData.json'; //we can directly import .json file without exporting it;
import { SeriesCards } from './props';

const Netflix = () => {
    return (
        <ul>
            {
                seriesData.map((value) => {
                    <SeriesCards key={value.id} data={value} />
                })
            }
        </ul>
    );
};

export default Netflix;

//so while working with .map(), its better return a component which is define in some other file;
//Props are properties/data of the parent which we pass to child component when we call it;
//here, value is the data which we pass inside the component using data={value}, and data={} is called props;
//for rendring the list, key prop is complsry;
import { TheChild } from './child';
import harsh from '../api/Data.json';


export const Compo = () => {
    return (
        <>
            {
                harsh.map((value) => {
                    return (
                        <TheChild key={value.id} data={value} />
                    )
            })
            }
        </>

    )
}
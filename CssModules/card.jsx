//so the best use of cssmodules is that we us a module for a single file for good experience;
import cssprop from './card.module.css';
//now after importing the modules we have to access the classname as the properties of the object
//and we have to give classNAme inside {};
//for multiple classes we have to use templeate literals;
export const CardCompo = () => {
    return (
        <div className={cssprop.main}>
            <div className={cssprop.card1}>
                <h2 className={cssprop.movieHeading}>Name:IronMan</h2>
                <h3 className={cssprop.ratings}>Ratings:9.2</h3>
                <p className={cssprop.para}>Reviews: Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat, quos.</p>
                <button className={cssprop.btn}>Watch Now!</button>
            </div>

            <div className={cssprop.card2}>
                <h2 className={cssprop.movieHeading}>Name:IronMan</h2>
                <h3 className={cssprop.ratings}>Ratings:9.2</h3>
                <p className={cssprop.para}>Reviews: Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat, quos.</p>
                <button className={cssprop.btn}>Watch Now!</button>
            </div>
        </div>
    );
};
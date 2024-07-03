const Netflix = () => {
    return (
        <>
            <img src="public/img.jpg" alt="" height='40%' width='40%' />
            <h2>Name: IronMan The Dead Hero!</h2>
            <h4>Reviews: Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa quos nobis provident consequatur nulla iste tenetur repellendus asperiores sunt odit enim eligendi, ducimus in laudantium?</h4>
            <h3>Ratings: 9.9</h3>
        </>
    );
};

//Method1 => The default export
//one file can only have one default export;
export default Netflix; //now this component will be axesable


//method2 => The Named Export;
//so in this methos we have to add the export keyword befor the let,const,var of the function/component etc..

export const TheComponent = () => {
    return (
        <>
            <img src="public/img.jpg" alt="" height='40%' width='40%' />
            <h2>Name: IronMan The Dead Hero!</h2>
            <h4>Reviews: Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa quos nobis provident consequatur nulla iste tenetur repellendus asperiores sunt odit enim eligendi, ducimus in laudantium?</h4>
            <h3>Ratings: 9.9</h3>
        </>
    );
};

export const TheFooter = () => {
    return(
        <h1>Copyright @HarshMishra2997</h1>
    );
};


///method3 => we can import the default and the named one in same line known as combained/mixed export/import;
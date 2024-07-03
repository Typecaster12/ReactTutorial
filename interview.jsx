export const Practise = () => {
    const student = []; //an empty array;

    return (
        <>
            {/* what will be the output? */}
            <p>{student.length && "No Students Found"}</p>
            <p>Number of Student: {student.length}</p>
        </>
    );

    // to show "No Students Found" as the output if the array in empty we can do this steps
    return (
        <>
            <p>{student.length === 0 && "No Student Found"}</p>
            <p>Number of students: {student.length}</p>
        </>
    );

    // can do this way either;
    return (
        <>
            <p>{!student.length && "No Student Found"}</p>
            <p>Number of students: {student.length}</p>
        </>
    );

    //as !0 = (not false === true) so && will check right operand and hence it will print "No Student Found"
};

// note =>
// react does not render false, null, undefined, NaN in the Dom. These values when used in JSX, will result in nothing being displayed.
// Thats the only reason we did not get any one of these values;

// How && works?
// =>  && first check the left operend if that condition is true only then it moves to the right operends

// so in this case why we get 0 and not "No students found"?
// => as the array is empty so its length is 0;
// => and 0 == false in computer basics, so if the left operend is false then && will not check the right one and gave the result 
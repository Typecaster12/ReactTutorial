//Hooks rules..

1.Can only be used at top level of our component.Which means donot call hooks inside conditions,loops,nested functions.

2.We can declare(use) hooks only in react components or custom hook. Do not call hooks form regular JS fucntion or in class components.(if first word of the function is in uppercase then that is component, if in lowercase that will be normal JS function).

3.We can create our custom hooks by creating function starting with (use) foreg. useForm, useFetch etc..

4.Ensure hooks are called in the same order

5.React.js compaires previous state and new state using "Object.is()", if it finds both are same then it will ignore re-rendering. 
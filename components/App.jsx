// import Netflix from './components/netflix'; //the default export one
// import { TheComponent, TheFooter } from './components/netflix'; //named export, we have to use {Name of compenent} this process to import the named export's file;
//and we can import more than one named export;

//This is the combained import/export
import Netflix, {TheComponent, TheFooter} from './components/netflix';

export const ShowCards = () => {
  return (
    <>
      <Netflix />
      <TheComponent />
      <TheFooter />
    </>
  );
};
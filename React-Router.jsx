import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Home from "./Components/Home";
import About from "./Components/About";
import Contact from "./Components/Contact";

const App = () => {

  //for routing we have to create router;
  //this router will take an array of routes(objects)
  const router = createBrowserRouter([
    //for each route(elemnt/component) we have to specify the path and the component
    {
      path: "/", //this is the root path 
      element: <Home /> //Home is a component
    },
    {
      path: "/about", //this is the path of about component
      element: <About /> //About is a component
    },
    {
      path: "/contact", //this is the path of contact component
      element: <Contact /> //Contact is a component
    }
  ]);

  //here routerProvider is a type of function/component that will take the router as a prop;
  return <RouterProvider router={router} />;

}

export default App;

import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Home from "./Components/Home";
import About from "./Components/About";
import Contact from "./Components/Contact";
import AppLayout from "./AppLayout/AppLayout";

const App = () => {

  const router = createBrowserRouter([

    //defining the layout of the app;
    //in this layout <AppLayout /> is the parent component
    //and <Home />, <About />, <Contact /> are the child components
    //means <Home />, <About />, <Contact /> will be rendered inside <AppLayout />

    {
      path: "/",
      element: <AppLayout />,
      children: [
        {
          path: "/",
          element: <Home />
        },
        {
          path: "/about",
          element: <About />
        },
        {
          path: "/contact",
          element: <Contact />
        }
      ]
    }

  ]);


  return <RouterProvider router={router} />;

}

export default App;
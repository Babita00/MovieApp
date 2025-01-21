import "./App.css";
import { About } from "./components/About/About";
import { Contact } from "./components/Contact/Contact";
import { Home } from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";

import {
  createBrowserRouter,
  RouterProvider,
  
} from "react-router-dom";
import { PageNotFound } from "./components/PageNotFound/PageNotFound";

function App() {
  const myRoute = createBrowserRouter([
    { path: "/", element:<Home/> },
    { path: "/about", element: <About/> },
    { path: "/contact", element:<Contact/> },
    { path: "*", element:<PageNotFound/> },
  ]);

  return (
    <>
      <Navbar />
      {/* <MoviesPage /> */}

      <RouterProvider router={myRoute} />
    </>
  );
}

export default App;

import "./App.css";
import { About } from "./components/About/About";
import { Contact } from "./components/Contact/Contact";
import { Home } from "./components/Home/Home";
import MoviesPage from "./components/Movies/MoviePage";
import Navbar from "./components/Navbar/Navbar";
import { createRoot } from "react-dom/client";

import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";

function App() {
  const myRoute = createBrowserRouter([
    { path: "/", element:<Home/> },
    { path: "/about", element: <About/> },
    { path: "/contact", element:<Contact/> },
    { path: "/movie", element:<MoviesPage/> },
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

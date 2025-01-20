import "./App.css";
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
    {
      path: "/",
      element: <h1>Home</h1>,
    },
    { path: "/about", element: <h1>About</h1> },
  ]);

  return (
    <>
      <Navbar />
      <MoviesPage />

      <RouterProvider router={myRoute} />
    </>
  );
}

export default App;

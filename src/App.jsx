import "./App.css";
import { About } from "./components/About/About";
import { Contact } from "./components/Contact/Contact";
import { Home } from "./components/Home/Home";
import { MovieDetails } from "./components/MovieDetails/MovieDetails";
import Navbar from "./components/Navbar/Navbar";

import { createHashRouter, RouterProvider, Outlet } from "react-router-dom";
import { PageNotFound } from "./components/PageNotFound/PageNotFound";

// Create a root layout component that includes the navbar
function RootLayout() {
  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
    </>
  );
}

function App() {
  const myRoute = createHashRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        { index: true, element: <Home /> },
        { path: "about", element: <About /> },
        { path: "contact", element: <Contact /> },
        { path: "movie-details/:id?", element: <MovieDetails /> },
        { path: "*", element: <PageNotFound /> },
      ],
    },
  ]);

  return <RouterProvider router={myRoute} />;
}

export default App;

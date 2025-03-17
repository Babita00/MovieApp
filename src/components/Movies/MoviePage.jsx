import { useState, useEffect } from "react";
import axios from "axios";
import SearchQuery from "../SearchBar/SearchQuery";
import LoadMore from "../LoadMore/LoadMore";
import { useNavigate } from "react-router-dom";
const MoviesPage = () => {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");

  const navigate = useNavigate();

  const fetchMovies = async (page, searchQuery) => {
    let url = "https://api.themoviedb.org/3/movie/popular";

    if (searchQuery) {
      url = "https://api.themoviedb.org/3/search/movie"; // Switch to search endpoint
    }

    try {
      const response = await axios.get(url, {
        params: {
          api_key: "923957623adda598d87bf801866141fb",
          page: page,
          query: searchQuery,
        },
      });

      if (searchQuery) {
        setMovies(response.data.results); // Replace movies with search results
      } else {
        setMovies((prevMovies) => [...prevMovies, ...response.data.results]); // Append to existing movies
      }
    } catch (error) {
      console.log(error);

      setMovies(null); // Set to null if there's an error
    }
  };

  useEffect(() => {
    fetchMovies(page, search);
  }, [page, search]); // Trigger on page or search change

  if (movies === null) {
    return (
      <div className="p-8 bg-gray-100 min-h-screen flex items-center justify-center">
        <p className="text-red-500 text-xl font-semibold">
          Failed to fetch movies. Please try again later.
        </p>
      </div>
    );
  }

  if (movies.length === 0) {
    return (
      <div className="p-8 bg-gray-100 min-h-screen flex items-center justify-center">
        <p className="text-gray-500 text-xl font-semibold">Loading movies...</p>
      </div>
    );
  }

  const onSearchText = (data) => {
    setSearch(data); // Update search state with new search text
    setPage(1); // Reset page when search text changes
  };

  const onMovieClick = (movie) => {
    console.log(movie.id);
    //send api key, language without changing its oiriginal route
    navigate(
      `/movie-details/${movie.id}?api_key=844dba0bfd8f3a4f3799f6130ef9e335`
    );
  };

  return (
    <div className="container mx-auto p-8 bg-gray-100 min-h-screen max-w-7xl">
      {/*  important*/}
      <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">
        Movies
      </h1>
      <SearchQuery onTextChange={onSearchText} />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full">
        {movies.map((movie, index) => (
          <div
            key={`${movie.id}-${index}`}
            className="p-4 rounded-lg bg-white shadow-lg overflow-hidden border border-gray-200"
          >
            {movie.poster_path && (
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.original_title}
                className="w-full h-64 object-cover rounded-lg opacity-90 hover:opacity-100 "
                onClick={() => onMovieClick(movie)}
              />
            )}
            <div className="p-4">
              <h2 className="text-xl font-semibold text-gray-800 mb-2">
                {movie.title}
              </h2>
              <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                {movie.overview}
              </p>
              <p className="text-gray-500 text-sm">
                <span className="font-medium">Release Date:</span>{" "}
                {movie.release_date}
              </p>
              <p className="text-gray-500 text-sm">
                <span className="font-medium">Rating:</span>{" "}
                {movie.vote_average}
              </p>
            </div>
          </div>
        ))}
      </div>
      <LoadMore
        onClick={() => {
          setPage(page + 1);
        }}
      />
    </div>
  );
};

export default MoviesPage;

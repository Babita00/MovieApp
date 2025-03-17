import { useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import axios from "axios";

export const MovieDetails = () => {
  const { id } = useParams();
  const [searchParams] = useSearchParams();
  const apiKey = searchParams.get("api_key");

  const [movieDetails, setMovieDetails] = useState(null);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&language=en-US&append_to_response=credits`
        );
        setMovieDetails(response.data);
      } catch (error) {
        console.error("Error fetching movie details:", error);
      }
    };

    if (id && apiKey) {
      fetchMovieDetails();
    }
  }, [id, apiKey]);

  if (!movieDetails) {
    return (
      <div className="text-center text-lg font-semibold mt-10">Loading...</div>
    );
  }

  return (
    <div className="mx-auto p-4 sm:p-6 bg-gray-900 text-white rounded-lg shadow-lg max-w-6xl">
      {/* Movie details section - stacks vertically on mobile, horizontal on larger screens */}
      <div className="flex flex-col md:flex-row bg-gray-700 rounded-lg overflow-hidden">
        <img
          className="w-full md:w-2/5 lg:w-1/3 object-cover h-auto max-h-[500px] mx-auto md:mx-0"
          src={`https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`}
          alt={movieDetails.title}
        />

        <div className="p-4 md:p-6 md:ml-4 text-center md:text-left flex flex-col justify-center">
          <h1 className="text-2xl sm:text-3xl font-bold mb-4">
            {movieDetails.title}
          </h1>
          <p className="mt-4 text-gray-300 text-sm sm:text-base">
            <strong className="text-white">Description:</strong>{" "}
            {movieDetails.overview}
          </p>
          <p className="mt-2 text-gray-300">
            <strong className="text-white">Rating:</strong>{" "}
            {movieDetails.vote_average} / 10
          </p>
        </div>
      </div>

      <h2 className="text-xl sm:text-2xl font-semibold mt-6 mb-4">Actors</h2>
      {/* Responsive grid that adjusts columns based on screen size */}
      <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4">
        {movieDetails.credits?.cast.slice(0).map((actor) => (
          <li
            key={actor.id}
            className="flex flex-col items-center bg-gray-800 rounded-lg p-2 sm:p-4 shadow-md"
          >
            <img
              className="w-20 h-24 sm:w-24 sm:h-32 md:w-28 md:h-36 object-cover rounded-md mb-2"
              src={
                actor.profile_path
                  ? `https://image.tmdb.org/t/p/w200${actor.profile_path}`
                  : "https://via.placeholder.com/100x150"
              }
              alt={actor.name}
            />
            <strong className="text-sm sm:text-base text-center truncate w-full">
              {actor.name}
            </strong>
            <span className="text-xs sm:text-sm text-gray-400 text-center truncate w-full">
              as {actor.character}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

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
    <div className=" mx-auto p-6 bg-gray-900 text-white rounded-lg shadow-lg">
      <div className="flex bg-gray-700">
        <img
          className="w-full md:w-1/2 mx-auto rounded-lg shadow-md"
          src={`https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`}
          alt={movieDetails.title}
        />

        <div className="flex flex-col">
          <h1 className="text-3xl font-bold mb-4 text-center">
            {movieDetails.title}
          </h1>

          <p className="mt-4 text-gray-300 flex flex-col mx-10">  
            <strong className="text-white">PLOT:</strong>{" "}
            {movieDetails.overview}
          </p>

          <p className="mt-2 text-gray-300 mx-10">
            <strong className="text-white">Rating:</strong>{" "}
            {movieDetails.vote_average} / 10
          </p>
        </div>
      </div>

      <h2 className="text-2xl font-semibold mt-6 mb-4">Actors</h2>
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {movieDetails.credits?.cast.slice(0).map((actor) => (
          <li
            key={actor.id}
            className="flex flex-col items-center bg-gray-800 rounded-lg p-4 shadow-md"
          >
            <img
              className="w-28 h-36 rounded-md mb-2"
              src={
                actor.profile_path
                  ? `https://image.tmdb.org/t/p/w200${actor.profile_path}`
                  : "https://via.placeholder.com/100x150"
              }
              alt={actor.name}
            />
            <strong className="text-lg">{actor.name}</strong>
            <span className="text-sm text-gray-400">as {actor.character}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

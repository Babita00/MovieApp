import { useParams } from "react-router-dom";
import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";

export const MovieDetails = () => {
  const { id } = useParams();
  const [searchParams] = useSearchParams();
  const apiKey = searchParams.get("api_key");

  const [movieDetails, setMovieDetails] = useState(null);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&language=en-US&append_to_response=credits`
        );
        const data = await response.json();
        setMovieDetails(data);
      } catch (error) {
        console.error("Error fetching movie details:", error);
      }
    };

    if (id && apiKey) {
      fetchMovieDetails();
    }
  }, [id, apiKey]);

  if (!movieDetails) {
    return <div>Loading...</div>;
  }

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>{movieDetails.title}</h1>
      <img
        src={`https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`}
        alt={movieDetails.title}
        style={{ maxWidth: "100%", borderRadius: "10px" }}
      />
      <p><strong>Description:</strong> {movieDetails.overview}</p>
      <p><strong>Rating:</strong> {movieDetails.vote_average} / 10</p>

      <h2>Actors</h2>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {movieDetails.credits?.cast.slice(0, 5).map((actor) => (
          <li key={actor.id}>
            <strong>{actor.name}</strong> as {actor.character}
          </li>
        ))}
      </ul>
    </div>
  );
};

import { useParams } from "react-router-dom";
export const MovieDetails = () => {
    const {id}= useParams();
  return (
    <div>
        <h1>Movie clicked with id: {id} </h1>
    </div>
  )
}

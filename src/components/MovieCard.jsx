import { Link } from "react-router-dom";
import "../styles/listpage.css";  

export default function MovieCard({ movie, onDelete }) {
  const imgSrc = movie.imgUrl || "/Images/cover2.jpg";

  return (
    <article className="movie-card">
      <Link to={`/movies/${movie.id}`}>
        <img
          src={imgSrc}
          alt={movie.nume}
          loading="lazy"
        />
      </Link>

      <div className="movie-body">
        <h3 className="name-movieCard">
          <Link to={`/movies/${movie.id}`}>{movie.nume}</Link>
        </h3>
        <p className="muted">{movie.autor}</p>
        <p className="badge">{movie.genre}</p>

        <div className="row-actions">
          <Link className="edit-button" to={`/movies/${movie.id}/edit`}>
            Edit
          </Link>

          {onDelete && (
            <button
              className="delete-button"
              onClick={() => onDelete(movie.id)}
              type="button"
            >
              Delete
            </button>
          )}
        </div>
      </div>
    </article>
  );
}
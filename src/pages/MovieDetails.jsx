import { Link, useParams, useNavigate } from "react-router-dom";
import "../styles/movie.css";


export default function MovieDetails({ byId, onDelete }) {
  const { id } = useParams();
  const movie = byId.get(String(id));
  const navigate = useNavigate();

  if (!movie) return <p className="muted">Nu s-a găsit filmul.</p>;

  return (
    <section
  className="details-page"
  style={{ backgroundImage: `url(${movie.imgUrl || "/Images/cover2.jpg"})` }}
>
  <div className="details-wrap">
    <h2>{movie.nume}</h2>
    <p><strong>Autor:</strong> {movie.autor}</p>
    <p><strong>Rating:</strong> {movie.rating}</p>
    <p><strong>Categorie:</strong> {movie.categorie}</p>
    <p><strong>Gen:</strong> {movie.genre}</p>
    <p>{movie.about}</p>

    {/* butoanele sub text */}
    <div className="row-actions">
      <Link className="btn edit-button" to={`/movies/${movie.id}/edit`}>Editează</Link>
      <button
        className="btn delete-button"
        onClick={async () => { await onDelete(movie.id); navigate("/movies"); }}
      >
        Șterge
      </button>
      <button className="btn ghost" onClick={() => navigate(-1)}>← Înapoi</button>
    </div>
  </div>
</section> );
}
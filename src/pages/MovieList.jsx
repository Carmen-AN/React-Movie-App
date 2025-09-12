import { useEffect, useMemo, useState } from "react";
import "../styles/listpage.css";        
import MovieCard from "../components/MovieCard.jsx";

export default function MovieList({ movies = [], onDelete }) {
  
  useEffect(() => {
    const root = document.getElementById("root");
    root.classList.remove("home", "form-page", "details-page");
    root.classList.add("list-page");
    return () => root.classList.remove("list-page");
  }, []);

 
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return movies;
    return movies.filter((m) => (m?.nume || "").toLowerCase().includes(q));
  }, [movies, query]);

  return (
    <section className="list">
      <h2 className="page-title">My Movies</h2>

      {/* bara de căutare */}
      <section className="filter-section fancy-filter">
        <input
          type="text"
          id="searchInput"
          name="searchInput"
          className="searchInput"
          placeholder="🔎 Caută film după nume..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          autoComplete="off"
        />
      </section>

      <div className="movie-gallery">
        {filtered.map((m) => (
          <MovieCard key={m.id} movie={m} onDelete={onDelete} />
        ))}

        {filtered.length === 0 && (
          <p className="empty-state">N-am găsit niciun film cu acest nume.</p>
        )}
      </div>
    </section>
  );
}
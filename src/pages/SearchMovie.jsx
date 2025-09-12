import { useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import MovieCard from "../components/MovieCard.jsx";

export default function SearchMovie({ movies }) {
  const [params, setParams] = useSearchParams();
  const q = (params.get("q") || "").trim().toLowerCase();

  const results = useMemo(() => {
    if (!q) return movies;
    return movies.filter((m) =>
      [m.nume, m.autor, m.genre, m.categorie]
        .filter(Boolean)
        .some((v) => String(v).toLowerCase().includes(q))
    );
  }, [movies, q]);

  return (
    <section className="search">
      <h2>Căutare</h2>
      <input
        type="search"
        placeholder="Caută film, autor, gen..."
        value={q}
        onChange={(e) => setParams({ q: e.target.value })}
        style={{ maxWidth: 420 }}
      />
      <div className="grid" style={{ marginTop: 16 }}>
        {results.map((m) => <MovieCard key={m.id} movie={m} />)}
      </div>
      {results.length === 0 && <p className="muted">Niciun rezultat pentru „{q}”.</p>}
    </section>
  );
}
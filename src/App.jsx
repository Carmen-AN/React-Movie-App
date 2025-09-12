import { useEffect, useMemo, useState } from "react";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";

import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";

import Home from "./pages/Home.jsx";
import MovieList from "./pages/MovieList.jsx";
import MovieDetails from "./pages/MovieDetails.jsx";
import AddMovie from "./pages/AddMovie.jsx";
import EditMovie from "./pages/EditMovie.jsx";
import Contact from "./pages/Contact.jsx";

import {
  loadMoviesInitial,
  createMovie,
  updateMovie,
  deleteMovie,
} from "./lib/api.js";

export default function App() {
  const [movies, setMovies] = useState([]);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    (async () => setMovies(await loadMoviesInitial()))();
  }, []);

  //  scoate .home la fiecare schimbare de pagina
  useEffect(() => {
    document.body.classList.remove("home");
  }, [location.pathname]);

  const byId = useMemo(() => {
    const m = new Map();
    for (const it of movies) m.set(String(it.id), it);
    return m;
  }, [movies]);

  const api = {
    async create(payload) {
      const created = await createMovie(payload);
      setMovies((s) => [...s, created]);
      navigate("/movies");
    },
    async update(id, patch) {
      const updated = await updateMovie(id, patch);
      setMovies((s) => s.map((x) => (String(x.id) === String(id) ? updated : x)));
      navigate(`/movies`);
    },
    async remove(id) {
      await deleteMovie(id);
      setMovies((s) => s.filter((x) => String(x.id) !== String(id)));
      navigate("/movies");
    },
  };

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<MovieList movies={movies} onDelete={api.remove} />} />
        <Route path="/movies/:id" element={<MovieDetails byId={byId} onDelete={api.remove} />} />
        <Route path="/add" element={<AddMovie onCreate={api.create} />} />
        <Route path="/movies/:id/edit" element={<EditMovie byId={byId} onSave={api.update} />} />
        <Route path="/contact" element={<Contact />} /> 
        <Route path="*" element={<p style={{padding:"2rem"}}>404</p>} />
      </Routes>
      <Footer />
    </>
  );
}
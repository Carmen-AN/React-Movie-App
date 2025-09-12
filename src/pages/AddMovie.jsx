import { useEffect, useState } from "react";

import "../styles/inputSearchM.css"; 

const empty = {
  nume: "",
  autor: "",
  rating: 0,
  categorie: "",
  genre: "",
  imgUrl: "",
  about: "",
};

export default function AddMovie({ onCreate }) {
  const [form, setForm] = useState(empty);

 useEffect(() => {
  const root = document.getElementById("root");
  root.classList.remove("home");
  root.classList.add("form-page");
  return () => root.classList.remove("form-page");
}, []);

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((s) => ({
      ...s,
      [name]: name === "rating" ? Number(value) : value,
    }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    await onCreate(form);
    setForm(empty);
  }

  return (
    <main>
      <div className="form-wrapper">
        <div className="container">
          <h2 className="form-title">Add Your Movie</h2>

          <form className="form" onSubmit={handleSubmit}>
            <div className="input-control">
              <label htmlFor="name">Name:</label>
              <input id="name" name="nume" value={form.nume} onChange={handleChange} required />
            </div>

            <div className="input-control">
              <label htmlFor="category">Category:</label>
              <input id="category" name="categorie" value={form.categorie} onChange={handleChange} required />
            </div>

            <div className="input-control">
              <label htmlFor="genre">Genre:</label>
              <input id="genre" name="genre" value={form.genre} onChange={handleChange} required />
            </div>

            <div className="input-control">
              <label htmlFor="author">Author:</label>
              <input id="author" name="autor" value={form.autor} onChange={handleChange} required />
            </div>

            <div className="input-control">
              <label htmlFor="rating">Rating:</label>
              <input type="number" min="0" max="10" id="rating" name="rating" value={form.rating} onChange={handleChange} required />
            </div>

            <div className="input-control">
              <label htmlFor="imgUrl">Link:</label>
              <input id="imgUrl" name="imgUrl" value={form.imgUrl} onChange={handleChange} required />
            </div>

            <div className="input-control">
              <label htmlFor="about">Tell us about the movie:</label>
              <textarea id="about" name="about" value={form.about} onChange={handleChange} />
            </div>

            <div className="row-actions">
              <button type="submit" className="btn">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}
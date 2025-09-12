import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../styles/inputSearchM.css";

const empty = { nume:"", autor:"", rating:0, categorie:"Movie", genre:"", imgUrl:"", about:"" };

export default function EditMovie({ byId, onSave }) {
  const { id } = useParams();
  const base = byId.get(String(id)) || empty;
  const [form, setForm] = useState(base);

  
  useEffect(() => {
    const root = document.getElementById("root");
    root.classList.remove("home");
    root.classList.add("form-page");
    return () => root.classList.remove("form-page");
  }, []);

  
  useEffect(() => { setForm(base || empty); }, [id]);

  function handleChange(e) {
    const { name, value } = e.target;
    setForm(s => ({ ...s, [name]: name === "rating" ? Number(value) : value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    await onSave(id, form);
  }

  return (
    <main>
      <div className="form-wrapper">
        <div className="container">
          <h2 className="form-title">Edit your Movie</h2>
          <h3 id="nume">{form.nume}</h3>

          <form id="form" onSubmit={handleSubmit} autoComplete="off">
            <div className="input-control">
              <label htmlFor="name">Edit Name:</label>
              <input id="name" name="nume" value={form.nume} onChange={handleChange} required />
            </div>

            <div className="input-control">
              <label htmlFor="category">Edit Category:</label>
              <input id="category" name="categorie" value={form.categorie} onChange={handleChange} required />
            </div>

            <div className="input-control">
              <label htmlFor="genre">Edit Genre:</label>
              <input id="genre" name="genre" value={form.genre} onChange={handleChange} required />
            </div>

            <div className="input-control">
              <label htmlFor="author">Edit Author:</label>
              <input id="author" name="autor" value={form.autor} onChange={handleChange} required />
            </div>

            <div className="input-control">
              <label htmlFor="rating">Edit Rating:</label>
              <input
                type="number"
                min="0"
                max="10"
                id="rating"
                name="rating"
                value={form.rating}
                onChange={handleChange}
                required
              />
            </div>

            <div className="input-control">
              <label htmlFor="imgUrl">Edit Link:</label>
              <input
                type="url"                 
                id="imgUrl"
                name="imgUrl"
                value={form.imgUrl}
                onChange={handleChange}
                required
              />
            </div>

            <div className="input-control">
              <label htmlFor="about">Edit About:</label>
              <textarea id="about" name="about" value={form.about} onChange={handleChange} />
            </div>

            <div>
              <button type="submit" value="Submit">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}
import { useEffect, useState } from "react";
import "../styles/inputSearchM.css"; 

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  useEffect(() => {
    const root = document.getElementById("root");
  
    root.classList.remove("home", "list-page", "details-page", "form-page");
    
    root.classList.add("form-page");
    return () => root.classList.remove("form-page");
  }, []);

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((s) => ({ ...s, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    
    alert("Mulțumim! Mesajul a fost trimis.");
    setForm({ name: "", email: "", subject: "", message: "" });
  }

  return (
    <main>
      <div className="form-wrapper">
        <div className="container">
          <h2 className="form-title">Contact Us</h2>

          <form onSubmit={handleSubmit}>
            <div className="input-control">
              <label htmlFor="name">Your Name</label>
              <input
                id="name"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="input-control">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="input-control">
              <label htmlFor="subject">Subject</label>
              <input
                id="subject"
                name="subject"
                value={form.subject}
                onChange={handleChange}
              />
            </div>

            <div className="input-control">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows="4"
                value={form.message}
                onChange={handleChange}
              />
            </div>

            <button type="submit">Send</button>
          </form>
        </div>
      </div>
    </main>
  );
}
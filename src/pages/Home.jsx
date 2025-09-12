import { useEffect } from "react";
import "../styles/style.css";      

export default function Home() {
  useEffect(() => {
  const root = document.getElementById("root");
  root.classList.remove("form-page");
  root.classList.add("home");
  return () => root.classList.remove("home");
}, []);


  return (
    <main>
      <section className="hero">
        <div className="fundal-imagine"></div>
        <div className="text-hero">
          <h2 className="main-h2">Free Movies to Watch, Anytime Anywhere.</h2>
          <p className="main-h2">
            The search is over! Let CinemaX help you find the perfect movie to
            watch tonight for free.
          </p>
        </div>
      </section>

      

      <div className="card-container">
        {/* Card 1 */}
        <div className="card">
          <div className="formula1">
            <img
              src="/Images/formula1.jpg"
              alt="Formula 1"
              className="card-Formula1"
              width="210"
              height="290"
            />
            <div className="formula1-text">
              <p>
                Formula 1 is a 2025 American sports drama film, starring Brad
                Pitt as a racing driver who returns to Formula One (F1) after a
                30-year absence to save his former teammate's underdog team, APXGP
              </p>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="card">
          <div className="inception">
            <img
              src="/Images/inception.jpg"
              alt="Inception-movie"
              className="card-Inception"
              width="210"
              height="290"
            />
            <div className="inception-text">
              <p>
                Inception is a 2010 science fiction action heist film written and
                directed by Christopher Nolan. The film stars Leonardo DiCaprio as a
                professional thief who steals information by infiltrating the
                subconscious of his targets.
              </p>
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="card">
          <div className="squid-game">
            <img
              src="/Images/squidgame.jpg"
              alt="Squid Game"
              className="card-Squidgame"
              width="210"
              height="290"
            />
            <div className="squidgame-text">
              <p>
                The Squid Game series revolves around a secret contest where 456
                players, all of whom are in deep financial hardship, risk their
                lives to play a series of children's games that have been turned
                deadly for the chance to win a ₩45.6 billion (US$39.86 million)
                prize.
              </p>
            </div>
          </div>
        </div>

        {/* Card 4 */}
        <div className="card">
          <div className="matrix">
            <img
              src="/Images/Matrix.jpg"
              alt="Matrix-movie"
              className="card-Matrix"
              width="210"
              height="290"
            />
            <div className="matrix-text">
              <p>
                The Matrix it depicts a dystopian future in which humanity is
                unknowingly trapped inside the Matrix, a simulated reality created
                by intelligent machines.
              </p>
            </div>
          </div>
        </div>

        {/* Card 5 */}
        <div className="card">
          <div className="batman">
            <img
              src="/Images/Batman.jpg"
              alt="Batman-movie"
              className="card-Batman"
              width="210"
              height="290"
            />
            <div className="batman-text">
              <p>
                When a sadistic serial killer begins murdering key political figures
                in Gotham, the Batman is forced to investigate the city's hidden
                corruption and question his family's involvement.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Coming-Soon section */}
      <section className="coming-soon-Cinema">
        <h2>Coming Soon to CinemaX</h2>

        <div className="movie-grid">
          {/* CARD 1 */}
          <div className="movie-card">
            <img
              src="/Images/IT-welcometoderry.jpg"
              alt="IT: Welcome to Derry"
            />
            <div className="movie-info">
              <p className="label">COMING THIS FALL</p>
              <h3 className="title">IT: Welcome to Derry</h3>
              <p className="description">
                Set within Stephen King's "IT" universe, this HBO series is based
                on King's novel and expands the vision of Andy Muschietti's films.
              </p>
            </div>
          </div>

          {/* CARD 2 */}
          <div className="movie-card">
            <img
              src="/Images/Knight of the seven kingdoms.jpg"
              alt="A Knight of the Seven Kingdoms"
            />
            <div className="movie-info">
              <p className="label">COMING SOON</p>
              <h3 className="title">
                A Knight of the Seven Kingdoms: The Hedge Knight
              </h3>
              <p className="description">
                A century before the events of Game of Thrones, there was Ser
                Duncan the Tall and his squire, Egg.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-top">
        <h2> CinemaX</h2>
        <p> CinemaX box office</p>
      </div>
      <nav className="footer-nav">
        <a href="#">ABOUT</a>
        <a href="#">GET CinemaX</a>
        <a href="#">HELP</a>
      </nav>
      <div className="footer-bottom">
        <nav className="footer-nav">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Use</a>
          <a href="#">Ad Choices</a>
          <a href="#">Manage Preferences</a>
        </nav>
        <p>
          © 2025 CinemaX Box Office, Inc. All Rights Reserved.<br />
          This website may contain mature content.
        </p>
      </div>
    </footer>
  );
}
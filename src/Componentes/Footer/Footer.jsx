import React from "react";
import "./Footer.css"; // Estilos para el footer (opcional)

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p className="footer-text">
          © {new Date().getFullYear()} Martín. Todos los derechos reservados.
        </p>
        <nav className="footer-links">
          <a href="/ensayos" className="footer-link">Ensayos</a>
          <a href="/poesia" className="footer-link">Poesía</a>
          <a href="/posdata" className="footer-link">Posdata</a>
        </nav>
        <div className="social-links">
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            Twitter
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            Instagram
          </a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
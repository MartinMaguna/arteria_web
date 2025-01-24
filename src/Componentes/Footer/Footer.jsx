import React from "react";
import "./Footer.css"; // Estilos para el footer (opcional)

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p className="footer-text">
          © {new Date().getFullYear()} Martín. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
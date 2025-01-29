import React from 'react';
import { Link } from 'react-router-dom';
import './About.css';
import { FiCode, FiBook, FiDatabase, FiRss } from 'react-icons/fi';

const About = () => {
  return (
    <div className="about-container">
      {/* Sección Hero */}
      <header className="hero-section">
        <div className="hero-content">
          <h1>Arteria</h1>
          <h2>Laboratorio de Arte Digital-Electrónico</h2>
          <p className="tagline">
            Donde los bytes encuentran la belleza y los datos se transforman en poesía
          </p>
        </div>
        <div className="hero-visual">
          <div className="glowing-circuit"></div>
        </div>
      </header>

      {/* Sección de Introducción */}
      <section className="mission-section">
        <div className="mission-content">
          <FiCode className="mission-icon" />
          <h3>Nuestra Misión</h3>
          <p>
            En Arteria exploramos la intersección entre tecnología y expresión artística, 
            creando obras que desafían los límites de la creación digital. Somos un espacio 
            experimental donde:
          </p>
          <ul className="mission-list">
            <li><FiRss /> Desarrollamos literatura electrónica generativa</li>
            <li><FiDatabase /> Transformamos datos en experiencias estéticas</li>
            <li><FiBook /> Reinterpretamos la tradición literaria con herramientas digitales</li>
          </ul>
        </div>
      </section>

      {/* Líneas de Investigación */}
      <section className="research-lines">
        <h3>Líneas de Creación</h3>
        <div className="research-grid">
          <div className="research-card">
            <FiBook className="research-icon" />
            <h4>Literatura Electrónica</h4>
            <p>
              Obras interactivas donde el lector co-crea la narrativa mediante algoritmos 
              generativos y estructuras hipertextuales
            </p>
            <Link to="/Poesia" className="cta-link">
              Explorar Poesía Digital →
            </Link>
          </div>

          <div className="research-card">
            <FiDatabase className="research-icon" />
            <h4>Arte Basado en Datos</h4>
            <p>
              Visualizaciones dinámicas que transforman conjuntos de datos complejos 
              en experiencias sensoriales y reflexivas
            </p>
            <Link to="/Posdata" className="cta-link">
              Ver Obras de Datos →
            </Link>
          </div>

          <div className="research-card">
            <FiCode className="research-icon" />
            <h4>Experimentación Tecno-Literaria</h4>
            <p>
              Creación de herramientas digitales para la producción y análisis de 
              obras literarias contemporáneas
            </p>
            <Link to="/Ensayos" className="cta-link">
              Leer Investigaciones →
            </Link>
          </div>
        </div>
      </section>

      {/* Filosofía */}
      <section className="philosophy-section">
        <div className="philosophy-content">
          <h3>Manifiesto Digital</h3>
          <blockquote>
            "En la era del algoritmo, el arte debe ser un sistema vivo, 
            una red de significados que se reconfigura con cada interacción"
          </blockquote>
          <div className="tech-stack">
            <span>Herramientas principales:</span>
            <div className="tech-icons">
              <span>React</span>
              <span>Three.js</span>
              <span>D3.js</span>
              <span>Python</span>
              <span>ML</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
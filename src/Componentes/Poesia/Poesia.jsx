import React from 'react';
import { Link } from 'react-router-dom';
import './Poesia.css'; // Archivo de estilos específico

const Poesia = () => {
  // Datos de las obras de poesía electrónica
  const obrasPoeticas = [
    {
      id: 1,
      titulo: "Poesía sin tierra",
      descripcion: "Visita algorítmica a la poesía del Movimiento Sin Tierra de Brasil",
      ruta: "/poesia/poesia-sin-tierra"},
    {
      id: 2,
      titulo: "Criptograma",
      descripcion: "Activación de las proclamas de la Marcha por Accesibilidad",
      ruta: "/poesia/criptograma"
    },
    {
      id: 3,
      titulo: "Poéticas Transfronterizas",
      descripcion: "Poesía peregrina, migrante, desde Latinoamerica y el Caribe",
      ruta: "/poesia/poeticas-transfronterizas"
    },
  ];

  return (
    <div className="poesia-container">
      <h1 className="titulo-seccion">Poesía Electrónica</h1>
      
      <div className="grid-poesia">
        {obrasPoeticas.map((obra) => (
          <div 
            key={obra.id} 
            className="card-poesia"
            style={{ '--card-bg': obra.background }} // CSS variable para el fondo
          >
            <div className="card-poesia-content">
              <div className="card-preview">
                {/* Espacio para una mini preview dinámica */}
                <div className="efecto-poesia"></div>
              </div>
              
              <div className="card-info">
                <h2 className="card-titulo">{obra.titulo}</h2>
                <p className="card-descripcion">{obra.descripcion}</p>
                
                <div className="card-metadata">
                  <Link 
                    to={obra.ruta} 
                    className="boton-experimentar"
                    state={{ background: obra.background }}
                  >
                    Experimentar →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Poesia;
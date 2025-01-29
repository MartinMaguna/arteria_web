import React from 'react';
import { Link } from 'react-router-dom';
import './Ensayos.css'; // Archivo de estilos para el componente

const Ensayos = () => {
  // Datos de ejemplo para los ensayos
  const ensayos = [
    {
      id: 1,
      titulo: "La poesía en la era digital",
      extracto: "Explorando el impacto de la tecnología en la creación poética...",
      ruta: "/ensayos/1"
    },
    {
      id: 2,
      titulo: "Narrativas no lineales",
      extracto: "Análisis de estructuras literarias contemporáneas...",
      ruta: "/ensayos/2"
    },
    {
      id: 3,
      titulo: "Literatura y inteligencia artificial",
      extracto: "El rol de la IA en la creación y análisis literario...",
      ruta: "/ensayos/3"
    },
  ];

  return (
    <div className="ensayos-container">
      <h1 className="titulo-seccion">Ensayos</h1>
      
      <div className="grid-ensayos">
        {ensayos.map((ensayo) => (
          <div key={ensayo.id} className="card-ensayo">
            <div className="card-contenido">
              <h2 className="card-titulo">{ensayo.titulo}</h2>
              <p className="card-extracto">{ensayo.extracto}</p>
              <Link to={ensayo.ruta} className="boton-leer">
                Leer más →
              </Link>
            </div>
            <div className="card-imagen">
              {/* Puedes agregar una imagen relacionada aquí */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Ensayos;
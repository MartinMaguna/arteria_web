import React from 'react';
import { Link } from 'react-router-dom';
import './Poesia.css'; // Archivo de estilos específico

const Poesia = () => {
  // Datos de las obras de poesía electrónica
  const obrasPoeticas = [
    {
      id: 1,
      titulo: "Máquina de Amor",
      descripcion: "Generativo interactivo basado en algoritmos sentimentales",
      ruta: "/poesia/maquina-amor",
      tipo: "interactivo"},
    {
      id: 2,
      titulo: "Ecos del Ciberespacio",
      descripcion: "Composición poética con visualización en tiempo real",
      ruta: "/poesia/ecos-ciberespacio",
      tipo: "visual"
    },
    {
      id: 3,
      titulo: "Algoritmos del Suspiro",
      descripcion: "Poema generativo con entrada de voz del usuario",
      ruta: "/poesia/algoritmos-suspiro",
      tipo: "generativo"
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
                  <span className="tipo-obra">{obra.tipo}</span>
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
import React from 'react';
import { Link } from 'react-router-dom';
import './Posdata.css'; // Archivo de estilos
import { FiDatabase, FiBarChart2, FiCloud } from 'react-icons/fi'; // Iconos de react-icons

const Posdata = () => {
  // Datos de obras de arte basadas en datos
  const dataArtworks = [
    {
      id: 1,
      title: "Flujos Urbanos",
      description: "Visualización en tiempo real de movilidad ciudadana",
      route: "/posdata/flujos-urbanos",
      dataSource: "API Transporte Municipal",
      dataType: "tiempo real",
      visualizationType: "mapa interactivo",
      icon: <FiBarChart2 />
    },
    {
      id: 2,
      title: "Clima Emocional",
      description: "Análisis sentimental de redes sociales por región",
      route: "/posdata/clima-emocional",
      dataSource: "Twitter API",
      dataType: "texto",
      visualizationType: "nube de sentimientos",
      icon: <FiCloud />
    },
    {
      id: 3,
      title: "Genoma Digital",
      description: "Representación artística de datos genómicos",
      route: "/posdata/genoma-digital",
      dataSource: "Datos Genómicos Abiertos",
      dataType: "genético",
      visualizationType: "estructura 3D",
      icon: <FiDatabase />
    },
  ];

  return (
    <div className="posdata-container">
      <header className="posdata-header">
        <h1>Arte Basado en Datos</h1>
        <p>Obras creadas a partir de conjuntos de datos complejos</p>
      </header>
      
      <div className="data-art-grid">
        {dataArtworks.map((artwork) => (
          <div key={artwork.id} className="data-art-card">
            <div className="card-header">
              <div className="data-icon">
                {artwork.icon}
              </div>
              <h2>{artwork.title}</h2>
            </div>
            
            <div className="card-image-placeholder">
              {/* Espacio para visualización previa */}
              <div className="data-preview"></div>
            </div>
            
            <div className="card-content">
              <p className="description">{artwork.description}</p>
              
              <div className="data-metadata">
                <div className="metadata-item">
                  <span className="metadata-label">Fuente:</span>
                  <span className="metadata-value">{artwork.dataSource}</span>
                </div>
                <div className="metadata-item">
                  <span className="metadata-label">Tipo:</span>
                  <span className="metadata-value">{artwork.dataType}</span>
                </div>
                <div className="metadata-item">
                  <span className="metadata-label">Visualización:</span>
                  <span className="metadata-value">{artwork.visualizationType}</span>
                </div>
              </div>
            </div>
            
            <Link 
              to={artwork.route} 
              className="explore-button"
              state={{ artworkData: artwork }}
            >
              Explorar Dataset →
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Posdata;
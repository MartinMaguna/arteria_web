import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import './DataArtworkViewer.css'; // Archivo de estilos
import { FiDatabase, FiArrowLeft } from 'react-icons/fi';

const DataArtworkViewer = () => {
  const { artworkId } = useParams();
  const [artwork, setArtwork] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Datos mockeados temporalmente
  const mockArtworks = {
    'flujos-urbanos': {
      title: "Flujos Urbanos",
      description: "Visualización en tiempo real de movilidad ciudadana",
      dataSource: "API Transporte Municipal",
      dataType: "tiempo real",
      visualization: "mapa interactivo",
      dataPoints: "1.5M",
      lastUpdated: "2023-08-20",
      embedCode: "<iframe src='...'></iframe>"
    },
    'clima-emocional': {
      title: "Clima Emocional",
      description: "Análisis sentimental de redes sociales por región",
      dataSource: "Twitter API",
      dataType: "texto",
      visualization: "nube de sentimientos",
      dataPoints: "850K",
      lastUpdated: "2023-08-18"
    },
    'genoma-digital': {
      title: "Genoma Digital",
      description: "Representación artística de datos genómicos",
      dataSource: "Datos Genómicos Abiertos",
      dataType: "genético",
      visualization: "estructura 3D",
      dataPoints: "2.4M",
      lastUpdated: "2023-08-15"
    }
  };

  useEffect(() => {
    const fetchArtwork = async () => {
      try {
        // Simular delay de API
        await new Promise(resolve => setTimeout(resolve, 500));
        
        const data = mockArtworks[artworkId];
        if (!data) throw new Error('Obra no encontrada');
        
        setArtwork(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchArtwork();
  }, [artworkId]);

  if (loading) return <div className="loading-container">Cargando obra...</div>;
  if (error) return <div className="error-container">Error: {error}</div>;

  return (
    <div className="data-artwork-viewer">
      <Link to="/posdata" className="back-button">
        <FiArrowLeft /> Volver a Posdata
      </Link>

      <header className="artwork-header">
        <FiDatabase className="title-icon" />
        <h1>{artwork.title}</h1>
        <p className="subtitle">{artwork.description}</p>
      </header>

      <div className="visualization-container">
        <div className="visualization-placeholder">
          {artwork.embedCode ? (
            <div dangerouslySetInnerHTML={{ __html: artwork.embedCode }} />
          ) : (
            <div className="data-preview-animation"></div>
          )}
        </div>
      </div>

      <section className="metadata-section">
        <h2>Metadatos del Dataset</h2>
        <div className="metadata-grid">
          <div className="metadata-item">
            <span className="metadata-label">Fuente:</span>
            <span className="metadata-value">{artwork.dataSource}</span>
          </div>
          <div className="metadata-item">
            <span className="metadata-label">Tipo de datos:</span>
            <span className="metadata-value">{artwork.dataType}</span>
          </div>
          <div className="metadata-item">
            <span className="metadata-label">Visualización:</span>
            <span className="metadata-value">{artwork.visualization}</span>
          </div>
          <div className="metadata-item">
            <span className="metadata-label">Datos procesados:</span>
            <span className="metadata-value">{artwork.dataPoints}</span>
          </div>
          <div className="metadata-item">
            <span className="metadata-label">Última actualización:</span>
            <span className="metadata-value">{artwork.lastUpdated}</span>
          </div>
        </div>
      </section>

      <section className="data-description">
        <h2>Contexto Artístico</h2>
        <p>
          Esta obra explora la relación entre {artwork.dataType} y su representación 
          a través de {artwork.visualization}. Los datos provenientes de {artwork.dataSource} 
          son transformados mediante algoritmos creativos para generar una experiencia 
          estética interactiva.
        </p>
      </section>
    </div>
  );
};

export default DataArtworkViewer;
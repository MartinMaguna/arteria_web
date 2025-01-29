import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const PoemaDigital = () => {
  const { poemId } = useParams();
  const [poema, setPoema] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const cargarPoema = async () => {
      try {
        const response = await fetch(`/api/poemas/${poemId}`);
        const data = await response.json();
        setPoema(data);
      } catch (error) {
        console.error('Error cargando poema:', error);
      } finally {
        setLoading(false);
      }
    };

    cargarPoema();
  }, [poemId]);

  if (loading) return <div>Cargando poema digital...</div>;
  if (!poema) return <div>Poema no encontrado</div>;

  return (
    <div className="poema-digital">
      <h1>{poema.titulo}</h1>
      <div dangerouslySetInnerHTML={{ __html: poema.contenido }} />
    </div>
  );
};

export default PoemaDigital;
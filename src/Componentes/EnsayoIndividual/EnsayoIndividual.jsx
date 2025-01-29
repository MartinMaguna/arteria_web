import { useParams } from 'react-router-dom';

const EnsayoIndividual = () => {
  const { id } = useParams();
  
  return (
    <div>
      <h1>Ensayo {id}</h1>
      {/* Contenido del ensayo */}
    </div>
  );
};

export default EnsayoIndividual;
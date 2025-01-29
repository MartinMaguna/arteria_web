import React from 'react';

const PoemaGenerativo = () => {
  // Arrays de palabras predefinidas
  const sustantivos = ['luz', 'sombra', 'mar', 'cielo', 'viento', 'sueño', 'tiempo', 'alma'];
  const verbos = ['canta', 'llora', 'vuela', 'sueña', 'abraza', 'danza', 'gime', 'callar'];
  const adjetivos = ['eterno', 'frágil', 'inmenso', 'lejano', 'oscuro', 'dulce', 'amargo', 'sutil'];
  const conectores = ['mientras', 'bajo', 'sobre', 'entre', 'hacia', 'contra', 'sin', 'con'];

  // Función para seleccionar una palabra aleatoria de un array
  const seleccionarAleatoria = (array) => {
    return array[Math.floor(Math.random() * array.length)];
  };

  // Función para generar un verso aleatorio
  const generarVerso = () => {
    return `${seleccionarAleatoria(sustantivos)} ${seleccionarAleatoria(verbos)} ${seleccionarAleatoria(adjetivos)}`;
  };

  // Función para generar un poema completo
  const generarPoema = () => {
    const verso1 = generarVerso();
    const verso2 = generarVerso();
    const verso3 = generarVerso();
    const verso4 = generarVerso();

    return (
      <>
        <p>{verso1}</p>
        <p>{verso2}</p>
        <p>{verso3}</p>
        <p>{verso4}</p>
      </>
    );
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Poema Generativo</h1>
      <div style={{ fontStyle: 'italic', color: '#555' }}>
        {generarPoema()}
      </div>
      <button 
        onClick={() => window.location.reload()} 
        style={{ marginTop: '20px', padding: '10px 20px', fontSize: '16px' }}
      >
        Generar nuevo poema
      </button>
    </div>
  );
};

export default PoemaGenerativo;
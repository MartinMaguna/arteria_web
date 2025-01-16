import React, { useState } from "react";
import poesiaData from "../Obra/poesia.json";

const GeneradorPoema = () => {
  const [poema, setPoema] = useState([]);

  const generarPoemaAleatorio = () => {
    const versosAleatorios = poesiaData.poema.map((seccion) => {
      const randomIndex = Math.floor(Math.random() * seccion.versos.length);
      return seccion.versos[randomIndex];
    });
    setPoema(versosAleatorios);
  };

  return (
    <div style={{ fontFamily: "serif", whiteSpace: "pre-wrap", lineHeight: "1.5" }}>
      <h1>Poesía Generativa</h1>
      <button onClick={generarPoemaAleatorio}>Generar Poema</button>
      <div style={{ marginTop: "20px" }}>
        {poema.map((linea, index) => (
          <p key={index}>{linea}</p>
        ))}
      </div>
    </div>
  );
};

export default GeneradorPoema;

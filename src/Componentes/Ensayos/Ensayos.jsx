import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Ensayos.css'; // Archivo de estilos para el componente
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase/config";

const Ensayos = () => {
    const [ensayos, setEnsayos] = useState([]);

    useEffect(() => {
        const ensayosRef = collection(db, "ensayos");
        getDocs(ensayosRef)
            .then((resp) => {
                const ensayosData = resp.docs.map((doc) => ({
                    ...doc.data(),
                    id: doc.id,
                }));
                console.log("Ensayos obtenidos:", ensayosData); // Agrega este log
                setEnsayos(ensayosData);
            })
            .catch((error) => {
                console.error("Error al obtener los documentos: ", error);
            });
    }, []);

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
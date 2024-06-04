/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { getPaises } from "../servicios/getPaises";
import { PaisCard } from "./PaisCard";
import { useState, useEffect } from "react";

export const ListaPaises = ({ pais }) => {
  const [informacion, setInformacion] = useState([]);
  const [existe, setExiste] = useState(false);

  const getInformacion = async () => {
    const info = await getPaises(pais);
    setInformacion(info);
  };

  useEffect(() => {
    getInformacion();
  }, []);

  if(informacion.length >0){
    //setExiste(true);
  }
  console.log(existe)
  return (
    <div className="listaPaises">
      {informacion.map((pais) => (
        <PaisCard key={pais.nombre} pais={pais} existe={existe}></PaisCard>
      ))}
    </div>
  );
};

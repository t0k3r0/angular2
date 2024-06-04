import { useState } from "react";
import { BuscarPais } from "./BuscarPais";
import { ListaPaises } from "./ListaPaises";



export const PaisesApp = () => {
    const [pais, setPaises] = useState("");

    const addPais = (pais) =>{
        setPaises(pais);
    }
  return (
    <>
        <h1 className="titulo">PAISES POR IDIOMA APP</h1>
        <div className="buscadorPaises">
          <BuscarPais addPais={addPais}/>
          <h2>{pais}</h2>
        </div>
        <ListaPaises key={pais} pais={pais}></ListaPaises>
    </>
  )
}

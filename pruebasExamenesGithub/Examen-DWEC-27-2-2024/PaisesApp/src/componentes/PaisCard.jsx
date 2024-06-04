/* eslint-disable react/prop-types */
export const PaisCard = ({ llave, pais, existe }) => {

    console.log(existe)

    return (
      <div key={llave} className="tarjeta">
        <h3>{pais.nombre}</h3>
        <p>Capital: {pais.capital}</p><br/>
        <p>Población: {pais.poblacion} personas</p><br/>
        <p>Continente: {pais.continente}</p><br/>
        <img src={pais.bandera}/>
        <div className="mensaje-vacio">{!existe && <p>No Existe Ningun pais donde se hable ese idioma</p>}</div>
      </div>
    );
};
  

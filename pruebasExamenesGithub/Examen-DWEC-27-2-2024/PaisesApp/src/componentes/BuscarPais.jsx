import { useState } from "react";
import PropTypes from 'prop-types';

// eslint-disable-next-line react/prop-types
export const BuscarPais = ({addPais}) => {
  const [valor, setValor] = useState("");

  const onCambioInput = ({target}) => {
    setValor(target.value);
  }

  const onSubmit = (event) =>{
    event.preventDefault();
    addPais(valor);
    setValor('');
  }
    return (
        <>
        <form onSubmit={onSubmit}>
          <input
            type="text"
            value={valor}
            placeholder="Buscador Paises por idioma"
            onChange={onCambioInput}
          ></input>
          <button onClick={onSubmit}>Buscar</button>
        </form>
      </>
  )
}
BuscarPais.propTypes = {
    valor: PropTypes.string.isRequired
    
}

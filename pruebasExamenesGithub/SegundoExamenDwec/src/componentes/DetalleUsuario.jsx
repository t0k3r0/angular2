import React from "react";
import { useParams } from "react-router-dom";

export const DetalleUsuario = () => {

    const {usuario} = useParams();
    const {password} = useParams();

  return (
    <>
      <h1>Tu usuario es {usuario} y tu contraseña es {password}</h1>
    </>
  );
};

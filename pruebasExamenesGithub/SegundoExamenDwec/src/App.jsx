import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Route } from 'react-router-dom'
import { Routes } from 'react-router-dom'
import { Cabecera } from './componentes/Cabecera'
import { Inicio } from './componentes/Inicio'
import { Login } from './componentes/Login'
import { DetalleUsuario } from './componentes/DetalleUsuario'
import { Comidas } from './componentes/Comidas'

export const App = () => {
  return (
    <>
    <BrowserRouter>
    <Cabecera/>
      <Routes>
        <Route path='/' element={<Inicio/>}></Route>
        <Route path='/login' element={<Login/>}></Route>  
        <Route path='/detalle/:usuario/:password' element={<DetalleUsuario/>}></Route>
        <Route path='/comidas' element={<Comidas/>}></Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

import React from 'react'
import { Tarjeta } from './Tarjeta'
import MarioImage from './imagenes/mario.jpeg'
import LuigiImage from './imagenes/luigi.jpeg'
import PeachImage from './imagenes/peach.jpeg'

export function App() {
  return (
    <div>
        <div>Personajes de Mario Bros favoritos</div>
        <Tarjeta nombre="Mario" colorFavorito="Rojo" image={MarioImage}/>
        <Tarjeta nombre="Luigi" colorFavorito="Verde" image={LuigiImage}/>
        <Tarjeta nombre="Peach" colorFavorito="Rosa" image={PeachImage}/>
    </div>
  )
}

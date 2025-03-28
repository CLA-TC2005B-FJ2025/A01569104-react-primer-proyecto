import 'bulma/css/bulma.css'
import React from 'react'
import { Tarjeta } from './Tarjeta'
import MarioImage from './imagenes/mario.jpeg'
import LuigiImage from './imagenes/luigi.jpeg'
import PeachImage from './imagenes/peach.jpeg'

export function App() {
  return (
    <div>
        <div>Personajes de Mario Bros favoritos</div>
        <div className="container">
          <section className="section">
            <div className="columns">
              <div className="column is-4">
                <Tarjeta nombre="Mario" colorFavorito="Rojo" image={MarioImage}/>
              </div>
                <div className="column is-4">
                  <Tarjeta nombre="Luigi" colorFavorito="Verde" image={LuigiImage}/>
              </div>
                <div className="column is-4">
                  <Tarjeta nombre="Peach" colorFavorito="Rosa" image={PeachImage}/>
                  </div>
            </div>
          </section>
        </div>
    </div>
  )
}

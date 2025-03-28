import React from 'react'

export function Tarjeta( props ) {
  return (
    <div>
        <div>Nombre del personaje: {props.nombre}</div>
        <div>Color favorito: {props.colorFavorito}</div>
        <img src={props.image} width={150} />
    </div>
  )
}

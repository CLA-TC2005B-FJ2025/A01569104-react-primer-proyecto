import React from 'react'

export function Tarjeta( props ) {
  return (
    <div class="card">
      <div class="card-image">
        <figure class="image is-3by4">
          <img src={props.image} alt="placeholder image"/>
        </figure>
      </div>
  
        <div class="media-content">
          <p class="title is-4">{props.nombre}</p>
          <p class="subtitle is-6">{props.colorFavorito} es su color favorito</p>
      </div>
    </div>
  )
}

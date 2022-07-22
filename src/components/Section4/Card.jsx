import React from 'react'

export default function Card({ color, recomendado, pago, precio, ahorro }) {
    return (
        <article className='card--container'>
            {recomendado && <p className='card--recomendado' style={{ backgroundColor: color }}>{recomendado}</p>}
            <div className='card--info--container'>
                <h3 className='card--info__title'>Pago {pago}</h3>
                <p className='card--info__precio'><span>$</span>{precio}</p>
                <p className='card--info__ahorro'>{ahorro}</p>
                <button className='card--info__button'>Escoger este <span></span></button>
            </div>
        </article>
    )
}

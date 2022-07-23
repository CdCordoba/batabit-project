import React from 'react'
import mainImg from '../../assets/img/logo.svg';
import './styles.css'

export default function Landing() {
    return (
        <div className='landing'>
            <img src={mainImg} alt="" />
            <div className='title--container'>
                <h1>La próxima revolución en el intercambio de criptomonedas</h1>
                <p>Batatabit ayuda a navegar entre los diferentes precios y tendencias</p>
                <a className='header--button' href="#planes">Conoce nuestros planes <span></span></a>
            </div>
        </div>
    )
}

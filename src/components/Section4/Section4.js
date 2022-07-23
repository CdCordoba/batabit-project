import React from 'react'
import Card from './Card'
import './styles.css';
export default function Section4() {
    return (
        <section id='planes' className='planes--container'>
            <div className='planes--title'>
                <h2>Escoge el que mejor se ajuste a ti.</h2>
                <p>Cualquier plan te da acceso completo a nuestra plataforma.</p>
            </div>
            <section className='planes--container__slider'>
                <Card recomendado='Recomendado' color='#F7931A' pago={'anual'} precio={'99'} ahorro='*Ahorras $129 comparado al plan mensual.' />
                <Card recomendado='Básico' color='rgb(44, 189, 238)' pago={'mensual'} precio={'19'} ahorro='*Renuevas todos los meses.' />
                <Card recomendado='Premium' color='rgb(163, 148, 148)' pago={'semestral'} precio={'79'} ahorro='*Ahorras $35 comparado al plan mensual.' />
            </section>
        </section>
    )
}

import React from 'react'
import Info from './Info'
import './styles.css'
export default function Section2() {
    const CLOCK_P = 'Nuestra API toma información minuto a minuto sobre las tasas que más determinan el comportamiento.';
    const EYES_P = 'Ni en la compra o al momento de exit, Batabit siempre te muestra el costo real de lo que estás adquiriendo.';
    const DOLLAR_P = 'No más rumores,con Babtabit sabrás el valor real de cada moneda en el mercado actual.';
    const CHECK_P = 'Nuestras fuentes están 100% verificadasycontinuamos auditando su contenido mientras se actualizan.'
    return (
        <section className='product-detail'>

            <span className='product-detail--logo'></span>
            <div className='product-detail--title'>
                <h2>Creamos un producto sin comparación.</h2>
                <p>Confiable y diseñado para su uso diario</p>
            </div>
            <section className='product--cards__container'>
                <Info title='Tiempo real' icon='clock' p={CLOCK_P} />
                <Info title='No hay tasas escondidas' icon='eyes' p={EYES_P} />
                <Info title='Tiempo real' icon='dollar' p={DOLLAR_P} />
                <Info title='Tiempo real' icon='check' p={CHECK_P} />
            </section>
        </section>
    )
}

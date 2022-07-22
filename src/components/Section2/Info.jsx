import React from 'react'
import './styles.css'
export default function Info({ icon, title, p }) {
    return (
        <article className='product--card'>
            <span className={`${icon} product--card__icon`} />
            <p className='product--card__title'>{title}</p>
            <p className='product--card__body'>{p}</p>
        </article>
    )
}

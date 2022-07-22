import React from 'react'
import './styles.css'
export default function Footer() {
    return (
        <footer>
            <section className='left'>
                <ul>
                    <li><a href="">Github</a> </li>
                    <li><a href="">LinkedIn</a> </li>
                    <li><a href="">Portfolio</a> </li>
                    <li><a href="">Henry profile</a> </li>
                </ul>
            </section>
            <section className='right'>
                <span className='batata-logo'></span>
            </section>
        </footer>
    )
}

import React from 'react'
import './styles.css'
export default function Footer() {
    return (
        <footer>
            <section className='left'>
                <ul>
                    <li><a href="https://github.com/CdCordoba" target='_blank'>Github</a> </li>
                    <li><a href="https://www.linkedin.com/in/christian-david-córdoba-carlosama-435b65235/" target='_blank'>LinkedIn</a> </li>
                    <li><a href="https://portfolio-cdcordoba.vercel.app" target='_blank'>Portfolio</a> </li>
                    <li><a href="https://www.talent.soyhenry.com/candidate/4916" target='_blank'>Henry profile</a> </li>
                </ul>
            </section>
            <section className='right'>
                <span className='batata-logo'></span>
                <p>Christian Córdoba</p>
            </section>
        </footer>
    )
}

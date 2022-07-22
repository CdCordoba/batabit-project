import React from 'react'
import './styles.css'
import Table from './Table'
import { IoRocketSharp } from 'react-icons/io5'
import { BsCurrencyBitcoin } from 'react-icons/bs'
import { FaEthereum } from 'react-icons/fa'
import { SiRipple } from 'react-icons/si'
export default function Section1() {
    const ICON_DOWN = 'down';
    const ICON_UP = 'up';
    return (
        <section className='exchange-container'>
            <div className='backgroundImg'></div>
            <div className='exchange-container--title'>
                <h2>Visibilizamos todas las tasas de cambio</h2>
                <p>Traemos información en tiempo real de las casas de cambio y las monedas más importantes del mundo </p>
            </div>
            <section className='tables-container'>
                <div className='currency--table'>
                    <p className='currency--table__title'>Monedas</p>
                    <div className='currency--table__container'>
                        <table >
                            <tbody>
                                <Table moneda='Bitcoin' precio={'1.96'} coin={<BsCurrencyBitcoin style={{ color: '#F7931A' }} />} icon={ICON_DOWN} classTop={true} />
                                <Table moneda='Ethereum' precio={'0.07'} coin={<FaEthereum style={{ color: '#23856f' }} />} icon={ICON_UP} />
                                <Table moneda='Ripple' precio={'2.15'} coin={<SiRipple style={{ color: '#43b3e7' }} />} icon={ICON_DOWN} />
                                <Table moneda='Stellar' precio={'4.96'} coin={<IoRocketSharp style={{ color: '#818361' }} />} icon={ICON_DOWN} classBottom={true} />
                            </tbody>
                        </table>
                    </div>
                    <div className='currency--table__actualizado'> <p><span>Actualizado</span>: 20 Julio 12:26 </p></div>
                </div>
            </section>
        </section>
    )
}

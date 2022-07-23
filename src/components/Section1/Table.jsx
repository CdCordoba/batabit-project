import React from 'react'

export default function Table({ moneda, precio, coin, icon, classTop, classBottom }) {
    return (
        <tr>
            <td style={{ textAlign: icon ? 'left' : 'center' }} className={`table__left ${classTop ? 'table--top__left' : classBottom ? 'table--bottom__left' : ''}`}>{coin && coin} {moneda}</td>
            <td className={`table__right ${classTop ? 'table--top__right' : classBottom ? 'table--bottom__right' : ''}`}>${precio} <span className={icon ? icon === 'up' ? 'trending--up' : 'trending--down' : ''}></span></td>
        </tr>
    )
}

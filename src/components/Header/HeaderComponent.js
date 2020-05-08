import React from 'react'
import './header.styles.scss'
import {Link} from 'react-router-dom';

export default function HeaderComponent() {
    return (
        <div className="header">
            <Link className="logo-container"></Link>
            <div className="options" >
                <Link className="option" to="/shop">Shop</Link>
                <Link className="option" to="/contact">Contact</Link>
            </div>
        </div>
    )
}

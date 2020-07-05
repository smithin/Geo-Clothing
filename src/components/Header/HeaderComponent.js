import React from 'react'
import './header.styles.scss'
import { Link } from 'react-router-dom';
import { auth } from '../../firebase/firebase.utils';

const HeaderComponent = ({ currentUser }) => (
    <div className="header">
        <Link className="logo-container"></Link>
        <div className="options" >
            <Link className="option" to="/shop">Shop</Link>
            <Link className="option" to="/contact">Contact</Link>
            {currentUser ? (<div className='option' onClick={() => auth.signOut()}>Sign Out</div>) :
                (<Link className="option" to="/signIn">Sign In</Link>)}
        </div>
    </div>
)

export default HeaderComponent;

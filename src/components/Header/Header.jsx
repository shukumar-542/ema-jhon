import React from 'react';
import './Header.css'
import logo from '../../images/Logo.svg'
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <nav className='header'>
            <img src={logo} alt="" />
            <div>
                <Link to="/">shop</Link>
                <Link to="/orders">order review</Link>
                <Link to="/inventory">manage inventory</Link>
                <Link to="/login">login</Link>
            </div>
        </nav>
    );
};

export default Header;
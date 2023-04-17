import React, { useContext } from 'react';
import './Header.css'
import logo from '../../images/Logo.svg'
import { Link } from 'react-router-dom';
import { authContext } from '../../Provider/AuthProvider';

const Header = () => {
    const {user,logOut} = useContext(authContext)
    const handleLogOut =()=>{
        logOut()
        
    }
    return (
        <nav className='header'>
            <img src={logo} alt="" />
            <div>
                <Link to="/">shop</Link>
                <Link to="/orders">order review</Link>
                <Link to="/inventory">manage inventory</Link>
                <Link to="/login">login</Link>
                <Link to="/signup">Sign up</Link>
                {
                user && <span className='text-white'>{user.email} <button onClick={handleLogOut}>Logout</button></span>
            }
            </div>
            
        </nav>
    );
};

export default Header;
/////////
import React from 'react';
import './header.css';
import logo from './pacific logo.png';
import {Link} from 'react-router-dom';

// barra de navegación inicial

const NavBar = ({props}) => {
    return (
        <div className='navegacion'>
            <div ><a href='index.html'><img src={logo} alt='logo' className='size' /></a></div>
            <ul>
            <Link to='/'>Home</Link>
                <Link to='/contact'>Contact</Link>
                <Link to='/about'>About</Link>
            </ul>
        </div>
    );
};

export default NavBar;
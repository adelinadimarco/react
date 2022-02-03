/////////
import React from 'react';
import './header.css';
import logo from './pacific logo.png'

// barra de navegación inicial

const NavBar = (props) => {
    return (
        <div className='navegacion'>
            <div ><a href='index.html'><img src={logo} alt='logo' className='size' /></a></div>
            <ul>
                <li> <a href="index.html" > Tienda </a></li>
                <li> <a href='ofertas.html'>En oferta!</a></li>
                <li> <a href="carrito.html">Carrito </a></li>
                <li> < a href="contacto.html" > Contacto </a></li>
            </ul>
        </div>
    );
};

export default NavBar;
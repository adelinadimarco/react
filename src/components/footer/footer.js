import React from 'react';
import './footer.css';

// barra de navegación inicial

const Footer = (props) => {
    return (
        <div className='navegacion'>
            <div >
                <ul>
                    <li>

                    </li>
                </ul>
            </div>
            <ul>
                <li> <a href="facebook.com" > /PacificParfumarie </a></li>
                <li> <a href='instagram.com'>En oferta!</a></li>
                <li> <a href="youtube.com">Carrito </a></li>
            </ul>
           {/* <a href='whatsapp'><img src={whatsapp} alt='whatsapp' className='size' />whatsapp</a> */}
        </div>
    );
};

export default Footer;
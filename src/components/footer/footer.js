import React from 'react';
import './footer.css';

// barra de navegación inicial

const Footer = ( {copyright}) => {
    return (
        <div className='navegacion'>
            <div >
              {copyright}
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
Footer.defaultProps = {
   copyright: '2022 todos los derechos reservados.'
};

export default Footer;
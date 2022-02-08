import React from 'react';
import './App.css';

// componentes
import NavBar from './components/header/NavBar';
import CardPerfume from './components/cards/Card';
import ItemCounter from './components/counter/ItemCount';
import Footer from './components/footer/footer'
import ItemListContainer from './components/itemList/itemListContainer';

// this.state = { variable que querramos, ej: age: 24}
// state es actualizable con class components (this refiere a clase)
// y luego setState() 
// los datos van de componentes padres a hijos - top-down

const App = () => {


  return (
    <div className="App" >
      <header>
        <NavBar />
      </header>

      <main>
        <h2> Productos en oferta </h2>
        <div className='displayProductos'>
          <CardPerfume
            name='pour homme'
            brand='armani'

            image='https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1618993647-la-vie-est-belle-1618993582.jpg'
            description='perfume armani blabla'
            price='100' />
          <CardPerfume brand='Dior'
            name='Miss Dior'
            image='https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/elle-mejores-perfumes-miss-dior-1636556379.png?crop=1xw:1xh;center,top&resize=480:*'
            description='perfume armani blabla'
            price='100' />
          <CardPerfume brand='armani'
            name='pour homme'
            image='https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1618993647-la-vie-est-belle-1618993582.jpg'
            description='perfume armani blabla'
            price='100' />
        </div>
        <div >
          <ItemCounter />
        </div>
        <div>
          <ItemListContainer />
        </div>
      </main>
      <footer >
        <Footer />
      </footer>
    </div>
  );
};

export default App;
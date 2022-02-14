import React from 'react';
import './App.css';
// componentes
import NavBar from './components/header/NavBar';
import Footer from './components/footer/footer';
import NuevoItem from './components/CardListContainer/NuevoItem';

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
          <NuevoItem />
        </div>
      </main>
      
      <footer >
        <Footer />
      </footer>
    </div>
  );
};

export default App;
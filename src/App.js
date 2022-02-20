import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// componentes
import NavBar from './components/Header/NavBar';
import Footer from './components/Footer/Footer';
import NuevoItem from './components/CardListContainer/NuevoItem';
import ItemListContainer from './ItemListContainer/ItemListContainer';

// this.state = { variable que querramos, ej: age: 24}
// state es actualizable con class components (this refiere a clase)
// y luego setState() 
// los datos van de componentes padres a hijos - top-down

const App = () => {


  return (
    <div className="App" >
      <header>
      <Router>
      <div>
        <NavBar />
      </div>
      <Routes>
        <Route path='/' element={<ItemListContainer />} />
        <Route path='/item/:id' element={<Contact />} />
        <Route path='/about' element={<About />} />
        {/* <Route path='/*' element={Error />} /> */}
        {/* // error 404 - erorr en ruta           */}
      </Routes>
    </Router>   
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
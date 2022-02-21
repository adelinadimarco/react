import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// componentes
import NavBar from './components/Header/NavBar';
import Footer from './components/Footer/Footer';

import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetaileContainer/ItemDetailContainer';

// this.state = { variable que querramos, ej: age: 24}
// state es actualizable con class components (this refiere a clase)
// y luego setState() 
// los datos van de componentes padres a hijos - top-down

const App = () => {


  return (
    <div className="App" >

      <Router>
        <header>
          <NavBar />
        </header>
        <Routes>
          <Route path='/' element={<ItemListContainer />} />
          {/* {/* <Route path='/item/:id' element={} /> */}
          <Route path='/detail' element={<ItemDetailContainer />} />

        </Routes>

        <footer >
          <Footer />
        </footer>
      </Router>

    </div>
  );
};

export default App;
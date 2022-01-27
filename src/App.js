import React from 'react';  
import './App.css';

// componentes
import NavBar from './components/header/NavBar';
import CardPerfume from './components/cards/Card';
 
//const user = 'adelina';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
      </header>
      <main>
         <h2>Productos en oferta</h2>
         <CardPerfume 
         brand=''
         name=''
         image=''
         description='' />
      </main>
      <footer>
         <p>
          Adelina Rodríguez Di Marco - curso React.js
        </p>
      </footer>
    </div>
  );
}

export default App;
import React, {useState} from 'react';
import './App.css';

// componentes
import NavBar from './components/header/NavBar';
import CardPerfume from './components/cards/Card';

// this.state = { variable que querramos, ej: age: 24}
// state es actualizable con class components (this refiere a clase)
// y luego setState() 

// versión actual

const App = () => {

const [counter, setCounter] = useState(0);

const handlerCounterUp = () => {
  setCounter(counter + 1);
};
const handlerCounterDown = () => {
  setCounter(counter - 1);
};

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
        <CardPerfume brand='armani'
          name='pour homme'
          image='https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1618993647-la-vie-est-belle-1618993582.jpg'
          description='perfume armani blabla'
          price='100' />
        <CardPerfume brand='armani'
          name='pour homme'
          image='https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1618993647-la-vie-est-belle-1618993582.jpg'
          description='perfume armani blabla'
          price='100' />
</div>
        <div >
          <p>{counter}</p>
          <button onClick={handlerCounterUp}>Más</button>
          <button onClick={handlerCounterDown}>Menos</button>
        </div>
      </main>
      <footer >
        <p>Adelina Rodríguez Di Marco - curso React.js </p>
      </footer>
    </div>
  );
};

export default App;
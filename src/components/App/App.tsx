import React, { useState, useEffect } from 'react';
import styles from './App.module.css';
import Counter from '../Counter/Counter';
import CounterValues from '../CounterValues/CounterValues';
import Footer from '../Footer/Footer';


export const startMinValue = 0;
export const startMaxValue = 0;

function App() {

  const [ minCountValue, setMinCountValue ] = useState( Number( localStorage.getItem( 'minCountValue' ) || startMinValue ) );
  const [ maxCountValue, setMaxCountValue ] = useState( Number( localStorage.getItem( 'maxCountValue' ) || startMaxValue ) );
  const [ count, setCount ] = useState( Number( localStorage.getItem( 'count' ) || minCountValue ) );

  useEffect( () => { localStorage.setItem( 'minCountValue', minCountValue.toString() ); }, [ minCountValue ] );
  useEffect( () => { localStorage.setItem( 'maxCountValue', maxCountValue.toString() ); }, [ maxCountValue ] );
  useEffect( () => { localStorage.setItem( 'count', count.toString() ); }, [ count ] );

  return (
    <div className="App">
      <h1>Counter</h1>

      <div className={ styles.appRow }>

        <div className={ styles.col }>
          <CounterValues
            minValue={ minCountValue }
            maxValue={ maxCountValue }
            setCount={ setCount }
            setMinCountValue={ setMinCountValue }
            setMaxCountValue={ setMaxCountValue } />
        </div>

        <div className={ styles.col }>
          <Counter
            minValue={ minCountValue }
            maxValue={ maxCountValue }
            count={ count }
            setCount={ setCount } />
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default App;

import React from 'react';
import styles from './Counter.module.css';
import Button from '../common/Button/Button';
import CountValue from './CountValue/CountValue';

type CounterType = {
  maxValue: number;
  minValue: number;
  count: number;
  setCount: ( value: number ) => void;
};

const Counter = ( props: CounterType ) => {
  // init state = 0

  // Increment Count
  function incrementCount() {
    props.setCount( props.count + 1 );
  }

  // Increment Count
  function decrementCount() {
    props.setCount( props.count - 1 );
  }

  // Reset Count
  function resetCount() {
    props.setCount( 0 );
  }

  return (
    <div className={ styles.counter }>

      <CountValue
        value={ props.count }
        minValue={ props.minValue }
        maxValue={ props.maxValue } />

      <div className={ styles.counterBtns }>
        <Button
          title='Increment'
          action={ incrementCount }
          disabled={ props.count === props.maxValue || props.minValue > props.maxValue ? true : false } />

        <Button
          title='Decrement'
          action={ decrementCount }
          disabled={ props.count === props.minValue ? true : false } />

        <Button
          title='Reset'
          action={ resetCount }
          disabled={ props.count === props.minValue ? true : false } />
      </div>
    </div>
  );
};

export default Counter;
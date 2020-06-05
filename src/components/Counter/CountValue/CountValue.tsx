import React from 'react';
import styles from './CountValue.module.css';

type CountValue = {
  value: number;
  minValue: number;
  maxValue: number;
};

const CountValue = ( props: CountValue ) => {
  return (
    <div className={ props.value === props.maxValue ?
      `${ styles.countValue } ${ styles.disabled }` :
      `${ styles.countValue }` }
    >
      {
        ( props.minValue ) === props.maxValue
          ? <p className={ styles.startText }>Enter values and press "Set"</p>

          : ( props.minValue > props.maxValue
            ? <p className={ styles.warningText }>Min value can't be more than Max value</p>
            : props.value
          )
      }

    </div>
  );
};

export default CountValue;
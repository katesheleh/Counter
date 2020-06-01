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
      `${ styles.countValue }` }>
      { props.value }
    </div>
  );
};

export default CountValue;
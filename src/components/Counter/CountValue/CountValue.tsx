import React from 'react';
import styles from './CountValue.module.css';
import { maxCountValue } from '../Counter';

type CountValue = {
  value: number
}

const CountValue = (props: CountValue) => {
  return (
    <div className={props.value === maxCountValue ?
      `${styles.countValue} ${styles.disabled}` :
      `${styles.countValue}`}>
      {props.value}
    </div>
  )
}

export default CountValue;
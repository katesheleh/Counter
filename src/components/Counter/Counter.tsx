import React from 'react'
import styles from './Counter.module.css';
import Button from './Button/Button';
import CountValue from './CountValue/CountValue';

type CounterType = {
  count: number
  incrementCount: () => void
  decrementCount: () => void
  resetCount: () => void
}

export const maxCountValue = 5;
export const minCountValue = 0;

const Counter = (props: CounterType) => {
  return (
    <div className={styles.counter}>

      <CountValue value={props.count} />

      <div className={styles.counterBtns}>
        <Button
          title='Increment'
          action={props.incrementCount}
          disabled={props.count === maxCountValue ? true : false} />

        <Button
          title='Decrement'
          action={props.decrementCount}
          disabled={props.count === minCountValue ? true : false} />

        <Button
          title='Reset'
          action={props.resetCount}
          disabled={props.count === minCountValue ? true : false} />
      </div>
    </div>
  )
}

export default Counter;
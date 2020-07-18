import React from 'react';
import styles from './Counter.module.css';
import Button from '../common/Button/Button';
import CountValue from './CountValue/CountValue';

type CounterType = {
	maxValue: number
	minValue: number
	count: number
	incrementCount: () => void
	decrementCount: () => void
	resetCount: (value: number) => void
}

const Counter = (props: CounterType) => {
	return (
			<div className={styles.counter}>

				<CountValue
						value={props.count}
						minValue={props.minValue}
						maxValue={props.maxValue}/>

				<div className={styles.counterBtns}>
					<Button
							title='Increment'
							action={props.incrementCount}
							disabled={props.count === props.maxValue || props.minValue > props.maxValue || props.minValue == props.maxValue ? true : false}/>

					<Button
							title='Decrement'
							action={props.decrementCount}
							disabled={props.count === props.minValue || props.minValue > props.maxValue || props.minValue == props.maxValue ? true : false}/>

					<Button
							title='Reset'
							action={() => props.resetCount(props.minValue)}
							disabled={props.count === props.minValue || props.minValue > props.maxValue || props.minValue == props.maxValue ? true : false}/>
				</div>
			</div>
	)
}

export default Counter;
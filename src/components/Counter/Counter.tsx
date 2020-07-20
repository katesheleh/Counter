import React from 'react';
import styles from './Counter.module.css';
import Button from '../common/Button/Button';
import CountValue from './CountValue/CountValue';

type CounterType = {
	maxValue: number
	minValue: number
	startMinValue: number
	startMaxValue: number
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
						minValue={props.startMinValue}
						maxValue={props.startMaxValue}/>

				<div className={styles.counterBtns}>
					<Button
							title='Increment'
							action={props.incrementCount}
							disabled={props.count === props.maxValue ? true : false}/>

					<Button
							title='Decrement'
							action={props.decrementCount}
							disabled={props.count === props.minValue ? true : false}/>

					<Button
							title='Reset'
							action={() => props.resetCount(props.minValue)}
							disabled={props.count === props.minValue ? true : false}/>
				</div>
			</div>
	)
}

export default Counter;
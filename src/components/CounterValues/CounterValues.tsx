import React, {ChangeEvent, useState} from 'react';
import styles from './CounterValues.module.css';
import Button from '../common/Button/Button';
import Value from './Value/Value';

type CounterValuesType = {
	minValue: number
	maxValue: number
	setCount: (value: number) => void
	setMinCountValue: (value: number) => void
	setMaxCountValue: (value: number) => void
}

const CounterValues = (props: CounterValuesType) => {

	const [equalValue, setEqualValue] = useState(true)

	const onChangeMinValueHadler = (e: ChangeEvent<HTMLInputElement>) => {
		+e.currentTarget.value >= props.maxValue ? setEqualValue(true) : setEqualValue(false)
		props.setMinCountValue(+e.currentTarget.value)
	}

	const onChangeMaxValueHadler = (e: ChangeEvent<HTMLInputElement>) => {
		+e.currentTarget.value <= props.minValue ? setEqualValue(true) : setEqualValue(false)
		props.setMaxCountValue(+e.currentTarget.value);
	}

	function setNewValues() {
		props.setCount(props.minValue);
	}

	return (
			<div className={styles.counterValues}>

				<div className={styles.counterValuesInnerWrap}>
					<Value
							title='Min value'
							value={props.minValue}
							onChange={onChangeMinValueHadler}
							equal={equalValue}/>

					<Value
							title='Max value'
							value={props.maxValue}
							onChange={onChangeMaxValueHadler}
							equal={equalValue}/>
				</div>

				<div className={styles.counterValuesCol}>
					<Button
							title='Set'
							action={setNewValues}
							disabled={equalValue}/>
				</div>
			</div>
	)
}

export default CounterValues;
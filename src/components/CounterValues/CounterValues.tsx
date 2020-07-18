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
	const {minValue: inputMinValue, maxValue: inputMaxValue} = props

	const [equalValue, setEqualValue] = useState(inputMinValue >= inputMaxValue);

	const onChangeMinValueHadler = (e: ChangeEvent<HTMLInputElement>) => {
		if (+e.currentTarget.value >= inputMaxValue) {
			setEqualValue(true)
		} else {
			setEqualValue(false)
		}
		props.setMinCountValue(+e.currentTarget.value)
	}

	const onChangeMaxValueHadler = (e: ChangeEvent<HTMLInputElement>) => {
		if (+e.currentTarget.value === inputMinValue) {
			setEqualValue(true);
		} else {
			setEqualValue(false);
		}
		props.setMaxCountValue(+e.currentTarget.value);
	};

	// Set updated min / max values on Click
	function setNewValues() {
		props.setCount(inputMinValue);
		props.setMinCountValue(inputMinValue);
		props.setMaxCountValue(inputMaxValue);
	}

	return (
			<div className={styles.counterValues}>

				<div className={styles.counterValuesInnerWrap}>
					<Value
							title='Min value'
							value={inputMinValue}
							onChange={onChangeMinValueHadler}
							equal={equalValue}/>

					<Value
							title='Max value'
							value={inputMaxValue}
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
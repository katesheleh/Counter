import React from 'react';
import styles from './App.module.css';
import Counter from '../Counter/Counter';
import CounterValues from '../CounterValues/CounterValues';
import Footer from '../Footer/Footer';
import {useDispatch, useSelector} from 'react-redux';
import {AppRootStateType} from '../../state/store';
import {
	SetMaxCountValueAC, SetMinCountValueAC, StateType, decrementCountAC,
	incrementCountAC, resetCountAC, setCountAC
} from '../../state/counter-reducer';


function App() {
	let counterValues = useSelector<AppRootStateType, StateType>(state => state.counterValues)
	let dispatch = useDispatch()

	const setMinCountValue = (value: number) => {
		dispatch(SetMinCountValueAC(value))
	}

	const setMaxCountValue = (value: number) => {
		dispatch(SetMaxCountValueAC(value))
	}

	const setCount = (value: number) => {
		dispatch(setCountAC(value))
	}

	const incrementCount = () => {
		dispatch(incrementCountAC())
	}

	const decrementCount = () => {
		dispatch(decrementCountAC())
	}

	const resetCount = (value: number) => {
		dispatch(resetCountAC(value))
	}

	return (
			<div className="App">
				<h1>Counter</h1>

				<div className={styles.appRow}>

					<div className={styles.col}>
						<CounterValues
								minValue={counterValues.startMinValue}
								maxValue={counterValues.startMaxValue}
								setCount={setCount}
								setMinCountValue={setMinCountValue}
								setMaxCountValue={setMaxCountValue}/>
					</div>

					<div className={styles.col}>
						<Counter
								minValue={counterValues.startMinValue}
								maxValue={counterValues.startMaxValue}
								count={counterValues.count}
								incrementCount={incrementCount}
								decrementCount={decrementCount}
								resetCount={resetCount}
						/>
					</div>
				</div>

				<Footer/>
			</div>
	);
}

export default App;

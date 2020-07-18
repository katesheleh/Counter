import {
	counterValuesReducer,
	decrementCountAC,
	incrementCountAC,
	resetCountAC,
	SetMaxCountValueAC,
	SetMinCountValueAC,
	StateType
} from './counter-reducer';

let startState: StateType

beforeEach(() => {
	startState = {
		startMinValue: 3,
		startMaxValue: 8,
		count: 3
	}
})

test('Min value should be set', () => {
	const endState = counterValuesReducer(startState, SetMinCountValueAC(2))
	expect(endState.startMinValue).toBe(2)
})


test('Max value should be set', () => {
	const endState = counterValuesReducer(startState, SetMaxCountValueAC(4))
	expect(endState.startMaxValue).toBe(4)
})


test('Count should be incremented', () => {
	const endState = counterValuesReducer(startState, incrementCountAC())
	expect(endState.count).toBe(4)
})


test('Count should be dencremented', () => {
	const endState = counterValuesReducer(startState, decrementCountAC())
	expect(endState.count).toBe(2)
})


test('Reset count', () => {
	const endState = counterValuesReducer(startState, resetCountAC(startState.count))
	expect(endState.count).toBe(startState.count)
})


test('Set count', () => {
	const endState = counterValuesReducer(startState, resetCountAC(10))
	expect(endState.count).toBe(10)
})
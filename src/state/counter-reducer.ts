export type StateType = {
	startMinValue: number
	startMaxValue: number
	min: number
	max: number
	count: number
}

export type SetMinCountValueType = {
	type: 'SET_MIN_START_VALUE'
	startMinValue: number
}

export type SetMaxCountValueType = {
	type: 'SET_MAX_START_VALUE'
	startMaxValue: number
}

export type IncrementCountType = {
	type: 'INCREMENT_COUNT'
}

export type DecrementCountType = {
	type: 'DECREMENT_COUNT'
}

export type SetCountType = {
	type: 'SET_COUNT'
	count: number
	startMinValue: number
	startMaxValue: number
}

export type ResetCountType = {
	type: 'RESET_COUNT'
	count: number
}

type ActionType = SetMinCountValueType | SetMaxCountValueType | SetCountType
		| IncrementCountType | DecrementCountType | ResetCountType

export let initialState: StateType = {
	startMinValue: 0,
	startMaxValue: 0,
	min: 0,
	max: 0,
	count: 0
}

export const counterValuesReducer = (state = initialState, action: ActionType): StateType => {
	switch (action.type) {
		case 'SET_MIN_START_VALUE':
			return {...state, startMinValue: action.startMinValue}

		case 'SET_MAX_START_VALUE':
			return {...state, startMaxValue: action.startMaxValue}

		case 'INCREMENT_COUNT':
			return {...state, count: state.count + 1}

		case 'DECREMENT_COUNT':
			return {...state, count: state.count - 1}

		case 'RESET_COUNT':
			return {...state, count: action.count}

		case 'SET_COUNT' :
			return {
				...state,
				count: action.count,
				max: state.startMaxValue,
				min: state.startMinValue
			}

		default:
			return state
	}
}

export const SetMinCountValueAC = (startMinValue: number): SetMinCountValueType => {
	return {type: 'SET_MIN_START_VALUE', startMinValue: startMinValue}
}

export const SetMaxCountValueAC = (startMaxValue: number): SetMaxCountValueType => {
	return {type: 'SET_MAX_START_VALUE', startMaxValue: startMaxValue}
}

export const incrementCountAC = (): IncrementCountType => {
	return {type: 'INCREMENT_COUNT'}
}

export const decrementCountAC = (): DecrementCountType => {
	return {type: 'DECREMENT_COUNT'}
}

export const resetCountAC = (count: number): ResetCountType => {
	return {type: 'RESET_COUNT', count: count}
}

export const setCountAC = (count: number, startMaxValue: number, startMinValue: number): SetCountType => {
	return {type: 'SET_COUNT', count: count, startMaxValue: startMaxValue, startMinValue: startMinValue}
}
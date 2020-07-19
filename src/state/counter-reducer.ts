export type StateType = {
	startMinValue: number
	startMaxValue: number
	count: number
	btnDisabled: boolean
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
}

export type ResetCountType = {
	type: 'RESET_COUNT'
	count: number
}

export type SetNewValueType = {
	type: 'SET_BTN_BEHAVIOR'
	btnDisabled: boolean
}

type ActionType = SetMinCountValueType | SetMaxCountValueType	| SetCountType
		| IncrementCountType | DecrementCountType | ResetCountType | SetNewValueType

export let initialState: StateType = {
	startMinValue: 0,
	startMaxValue: 0,
	count: 0,
	btnDisabled: true
}

export const counterValuesReducer = (state = initialState, action: ActionType): StateType => {
	switch (action.type) {
		case 'SET_MIN_START_VALUE':
			return {...state, startMinValue: action.startMinValue};

		case 'SET_MAX_START_VALUE':
			return {...state, startMaxValue: action.startMaxValue};

		case 'INCREMENT_COUNT':
			return {...state, count: state.count + 1};

		case 'DECREMENT_COUNT':
			return {...state, count: state.count - 1};

		case 'RESET_COUNT':
			return {...state, count: action.count};

		case 'SET_COUNT' :
			return {...state, count: action.count};

		case 'SET_BTN_BEHAVIOR':
			return {...state, btnDisabled: action.btnDisabled, }

		default:
			return state;
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

export const setCountAC = (count: number): SetCountType => {
	return {type: 'SET_COUNT', count: count}
}

export const setBtnBehaviorAC = (btnDisabled: boolean): SetNewValueType => {
	return {type: 'SET_BTN_BEHAVIOR', btnDisabled: btnDisabled}
}

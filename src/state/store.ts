import {combineReducers, createStore} from 'redux';
import {counterValuesReducer} from './counter-reducer';

const RootReducer = combineReducers({
	counterValues: counterValuesReducer,
})

export const store = createStore(RootReducer)

export type AppRootStateType = ReturnType<typeof RootReducer>
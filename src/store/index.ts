import {createStore, applyMiddleware, compose, combineReducers} from 'redux'
import thunk from 'redux-thunk'
import root from './reducer/root'

const reducer = combineReducers(root)
const composeEnhancers = compose

const middleware = [thunk]

export const rootStore = createStore(
  reducer,
  undefined,
  composeEnhancers(applyMiddleware(...middleware))
)

export type RootStore = ReturnType<typeof reducer>

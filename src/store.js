import thunk from 'redux-thunk'
import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import promiseMiddleware from 'redux-promise-middleware'
import rootReducer from './ducks/rootReducer';

console.log('store')

export default createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk, promiseMiddleware())))

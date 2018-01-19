import { combineReducers } from 'redux'
import profileReducer from './reducers/getProfileReducer'

const rootReducer = combineReducers({
  profileReducer,
})
console.log('rootReducer')
export default rootReducer
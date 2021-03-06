import { combineReducers } from 'redux'
import welcome from './welcome'

// Creates a single root reducer out of Deer's reducers and returns an object
// whose values are reducing functions with keys passed.
export default combineReducers({
  welcomeReducer: welcome
})

import { combineReducers } from 'redux';

import characters from './characters';

const createRootReducer = () => combineReducers({
  characters
})

export default createRootReducer

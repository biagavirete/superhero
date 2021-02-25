import { applyMiddleware, combineReducers, createStore } from 'redux';
import createSagaMiddleware from "redux-saga"
import { composeWithDevTools } from 'redux-devtools-extension'
import rootSaga from './ducks/rootSaga';
import reducerCharacter from './ducks/characters';

const sagaMiddleware = createSagaMiddleware();

const middlewares = [
  sagaMiddleware
]

const createRootReducer = () => combineReducers({
  character: reducerCharacter,
})

const store = createStore(createRootReducer(), composeWithDevTools(applyMiddleware(...middlewares)));

sagaMiddleware.run(rootSaga)

export { store };
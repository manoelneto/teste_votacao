import { createStore, applyMiddleware, compose } from 'redux'
import rootReducer from './rootReducer'
import createSagaMiddleware from 'redux-saga';
import rootSaga from "./rootSagas";

const sagaMiddleware = createSagaMiddleware();

const initialState = {}
const enhancers = []
const middleware = [
  sagaMiddleware
]

if (process.env.NODE_ENV === 'development') {
  const devToolsExtension = window.devToolsExtension

  if (typeof devToolsExtension === 'function') {
    enhancers.push(devToolsExtension())
  }
}

const composedEnhancers = compose(
  applyMiddleware(...middleware),
  ...enhancers
)

const store = createStore(
  rootReducer,
  initialState,
  composedEnhancers
)

sagaMiddleware.run(rootSaga)

export default store;

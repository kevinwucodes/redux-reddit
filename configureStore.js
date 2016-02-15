import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'
import rootReducer from './reducers'
import { compose } from 'ramda'

const loggerMiddleware = createLogger()

export default function configureStore(initialState) {
  return createStore(
    rootReducer,
    initialState,
    compose(applyMiddleware(
      thunkMiddleware,
      loggerMiddleware
    ), window.devToolsExtension ? window.devToolsExtension() : f => f)
  )
}

import { createStore, applyMiddleware, compose } from "redux"
import { persistStore } from "redux-persist"
import { createLogger } from "redux-logger"
import createSagaMiddleware from "redux-saga"

import RootSagas from "./RootSagas"

import {
	createReduxBoundAddListener,
	createReactNavigationReduxMiddleware,
} from 'react-navigation-redux-helpers'

// export const addListener = createReduxBoundAddListener("root")
// creates the store
export default rootReducer => {
  /* ------------- Redux Configuration ------------- */

  const middleware = []
  const enhancers = []
  const __DEV__ = process.env.NODE_ENV !== "production"

  /* ------------- Saga Middleware ------------- */

  const sagaMiddleware = createSagaMiddleware()
  middleware.push(sagaMiddleware)

  const navMiddleware = createReactNavigationReduxMiddleware('root', state => state.nav)
  middleware.push(navMiddleware)


  /* ------------- Logger Middleware ------------- */

  if (__DEV__) {
    // create the logger
    const logger = createLogger()
    middleware.push(logger)
  }

  /* ------------- Assemble Middleware ------------- */

  enhancers.push(applyMiddleware(...middleware))

  const store = createStore(rootReducer, compose(...enhancers))

  // configure persistStore and check reducer version number
  let persistor = persistStore(store)

  // kick off root saga
  sagaMiddleware.run(RootSagas)

  return { persistor, store }
}

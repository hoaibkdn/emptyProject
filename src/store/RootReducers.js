import storage from "redux-persist/lib/storage"
import { persistReducer } from "redux-persist"
import immutableTransform from "redux-persist-transform-immutable"
import { combineReducers } from 'redux'

// Import Reducers
import { navigationReducer } from "../navigation"
// import { posReducer } from "../app/pos/reducers/index"

const persistConfig = {
  transforms: [immutableTransform()],
  key: "root",
  storage
}

const navPersistConfig = {
  key: 'nav',
  storage: storage,
  // blacklist: []
}

export const rootReducer = persistReducer(persistConfig, combineReducers({
  nav: navigationReducer,
  // pos: posReducer
}))

console.log('navigationReducer ', navigationReducer)

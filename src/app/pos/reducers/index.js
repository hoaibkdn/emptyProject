// import libs
import { createActions, createReducer } from "reduxsauce"
import Immutable from "seamless-immutable"
import { REHYDRATE } from "redux-persist/lib/constants"

export const { Types, Creators } = createActions({
  login: ['email', 'password'],
})

export const INITIAL_STATE = Immutable({
  type: ''
})

const login = (state, action) => {
  return state.merge({
    type: action.type
  })
}

const HANDLERS = {
  [Types.LOGIN]: login,
}

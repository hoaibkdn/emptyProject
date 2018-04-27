import AppNavigation from './AppNavigation'

// const initialState = AppNavigation.router.getStateForAction(AppNavigation.router.getActionForPathAndParams('LoginScreen'));
export const navigationReducer = (state = null, action) => {
  const newState = AppNavigation.router.getStateForAction(action, state)
  console.log('newState ', newState)
  return newState || state
}

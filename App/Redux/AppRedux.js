import { createActions, createReducer } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  startup: null,
  showCategories: null,
  hideCategories: null,
  connectivityChange: ['isConnected'],
  handleError: ['error'],
  closeError: null,
})

export const AppTypes = Types
export default Creators


export const INITIAL_STATE = Immutable({
  isReady: false,
  categories: { isShowing: false },
  isConnected: true,
  isShowingError: false,
  error: false,
})

const showCategories = (state) => {
  return state.merge({categories: {isShowing: true}})
}

const hideCategories = (state) => {
  return state.merge({categories: {isShowing: false}})
}

// handler connectivity change
const connectivityChange = (state, { isConnected }) => {
  return state.merge({ isConnected })
}

const handleError = (state, { error }) => {
  return state.merge({error: true })
}
const closeError = (state, { error }) => {
  return state.merge({error: false })
}

export const reducer = createReducer(INITIAL_STATE, {
  [Types.SHOW_CATEGORIES]: showCategories,
  [Types.HIDE_CATEGORIES]: hideCategories,
  [Types.CONNECTIVITY_CHANGE]: connectivityChange,
  [Types.HANDLE_ERROR]: handleError,
  [Types.CLOSE_ERROR]: closeError,


})

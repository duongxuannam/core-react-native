import { all, takeLatest } from 'redux-saga/effects'
import { AppTypes } from '../Redux/AppRedux'

function* appRootSagas() {
  yield all([
    yield takeLatest(AppTypes.HANDLE_ERROR, handleError),
  ])
}

function* handleError(action) { // eslint-disable-line
  let { error } = action // eslint-disable-line
  try {
    // show error
  } catch(error) {
    // show error
  }
}

export default appRootSagas

import { all, spawn } from 'redux-saga/effects'
// import loginSaga from './sagas/loginSaga'
// import socialLoginSaga from './sagas/socialLoginSaga'

export default function* rootSagas() {
  yield all(
    [
      // loginSaga,
      // socialLoginSaga
    ].map(spawn)
  )
}

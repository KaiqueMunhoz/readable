import api from '../../services/apis/baseAPI'
import {
  call,
  put
} from 'redux-saga/effects'
import {
  postsSuccess
} from '../actions/posts'

export function* posts() {
  const {
    data
  } = yield call(api.get, '/posts')

  yield put(postsSuccess(data))
}
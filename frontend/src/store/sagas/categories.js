import api from '../../services/apis/baseAPI';
import {
  call,
  put
} from 'redux-saga/effects';

import {
  categoriesSuccess
} from '../actions/categories'

export function* categories() {
  const {
    data
  } = yield call(api.get, '/categories')

  const categories = data.categories

  yield put(categoriesSuccess(categories))
}
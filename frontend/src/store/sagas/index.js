import {
  all,
  takeLatest
} from 'redux-saga/effects';

import {
  categories
} from './categories'

import {
  CATEGORIES_REQUEST
} from '../actions/categories'

export default function* rootSaga() {
  yield all([
    takeLatest(CATEGORIES_REQUEST, categories)
  ]);
}
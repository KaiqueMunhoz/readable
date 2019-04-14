import {
  all,
  takeLatest
} from 'redux-saga/effects';

//SAGAS
import {
  categories
} from './categories'
import {
  posts
} from './posts'

//ACTION TYPES
import {
  CATEGORIES_REQUEST
} from '../actions/categories'
import {
  POSTS_REQUEST
} from '../actions/posts';

export default function* rootSaga() {
  yield all([
    takeLatest(POSTS_REQUEST, posts),
    takeLatest(CATEGORIES_REQUEST, categories),
  ]);
}
import { all, takeLatest, take } from "redux-saga/effects";

//SAGAS
import { categories } from "./categories";
import { posts, postsByCategory, postsDetails } from "./posts";

//ACTION TYPES
import { CATEGORIES_REQUEST } from "../actions/categories";
import {
  POSTS_REQUEST,
  POSTS_CATEGORY_REQUEST,
  POSTS_DETAILS_REQUEST
} from "../actions/posts";

export default function* rootSaga() {
  yield all([
    takeLatest(POSTS_REQUEST, posts),
    takeLatest(POSTS_CATEGORY_REQUEST, postsByCategory),
    take(POSTS_DETAILS_REQUEST, postsDetails),
    takeLatest(CATEGORIES_REQUEST, categories)
  ]);
}

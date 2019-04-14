import { all, takeLatest } from "redux-saga/effects";

//SAGAS
import { categories } from "./categories";
import { posts, postsByCategory } from "./posts";

//ACTION TYPES
import { CATEGORIES_REQUEST } from "../actions/categories";
import { POSTS_REQUEST, POSTS_CATEGORY_REQUEST } from "../actions/posts";

export default function* rootSaga() {
  yield all([
    takeLatest(POSTS_REQUEST, posts),
    takeLatest(POSTS_CATEGORY_REQUEST, postsByCategory),
    takeLatest(CATEGORIES_REQUEST, categories)
  ]);
}

import api from "../../services/apis/baseAPI";
import { call, put } from "redux-saga/effects";
import {
  postsSuccess,
  postsByCategorySuccess,
  postsUpdateVoteSuccess
} from "../actions/posts";

export function* posts() {
  const { data } = yield call(api.get, "/posts");

  yield put(postsSuccess(data));
}

export function* postsByCategory(action) {
  const category = action.payload;
  const { data } = yield call(api.get, `/${category}/posts`);

  yield put(postsByCategorySuccess(data));
}

export function* postsDetails(action) {
  const id = action.payload;
  const { data } = yield call(api.get, `/posts/${id}`);

  yield put(postsByCategorySuccess(data));
}

export function* postsUpdateVote(action) {
  const { id, option } = action.payload;
  const { data } = yield call(api.post, `/posts/${id}`, { option });

  yield put(postsUpdateVoteSuccess(data));
}

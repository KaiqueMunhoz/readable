import {
  POSTS_SUCCESS
} from "../actions/posts";

const INITIAL_STATE = [];

export default function posts(state = INITIAL_STATE, action) {
  switch (action.type) {
    case POSTS_SUCCESS:
      return [...state, ...action.payload.data];
    default:
      return state;
  }
}
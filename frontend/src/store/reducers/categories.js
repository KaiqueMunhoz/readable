import { CATEGORIES_SUCCESS } from "../actions/categories";
import initialState from "../initialState";

export default function categories(state = initialState.categories, action) {
  switch (action.type) {
    case CATEGORIES_SUCCESS: {
      return [...action.payload.data];
    }
    default:
      return state;
  }
}

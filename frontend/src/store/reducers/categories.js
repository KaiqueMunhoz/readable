import {
  ALL_CATEGORIES
} from '../actions/categories';
import initialState from '../initialState';

export default function categories(state = initialState.categories, action) {
  switch (action.type) {

    default:
      return state;
  }
}
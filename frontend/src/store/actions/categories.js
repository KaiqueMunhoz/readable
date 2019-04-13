export const CATEGORIES_REQUEST = 'CATEGORIES_REQUEST';
export const CATEGORIES_SUCCESS = 'CATEGORIES_SUCCESS';

export const categoriesRequest = repository => ({
  type: CATEGORIES_REQUEST,
  payload: {
    repository
  }
})

export const categoriesSuccess = data => ({
  type: CATEGORIES_SUCCESS,
  payload: {
    data
  }
})
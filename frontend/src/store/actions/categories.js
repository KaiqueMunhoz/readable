export const CATEGORIES_REQUEST = 'CATEGORIES_REQUEST';
export const CATEGORIES_SUCCESS = 'CATEGORIES_SUCCESS';

export const categoriesRequest = () => ({
  type: CATEGORIES_REQUEST
})

export const categoriesSuccess = data => ({
  type: CATEGORIES_SUCCESS,
  payload: {
    data
  }
})
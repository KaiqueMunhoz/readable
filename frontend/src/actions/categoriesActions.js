import axios from 'axios';
export const LOADING_CATEGORIES = 'LOADING_CATEGORIES';
export const RETURN_CATEGORIES = 'RETURN_CATEGORIES';

function loadingCategories(value) {
  return {
    type: LOADING_CATEGORIES,
    loading: value,
  };
}
function returnCategories(categories) {
  return {
    type: RETURN_CATEGORIES,
    categories,
  };
}

export function getAllCategories() {
  return dispatch => {
    let url = 'http://localhost:3001/categories';
    dispatch(loadingCategories(true));
    axios.get(url)
      .then(function(response) {
        dispatch(returnCategories(response.data.categories));
      })
      .catch(function(error) {
        alert(error)
      });
  };
}
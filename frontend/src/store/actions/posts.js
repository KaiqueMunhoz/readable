export const POSTS_REQUEST = "POSTS_REQUEST";
export const POSTS_SUCCESS = "POSTS_SUCCESS";
export const POSTS_CATEGORY_REQUEST = "POSTS_CATEGORY_REQUEST";
export const POSTS_CATEGORY_SUCCESS = "POSTS_CATEGORY_SUCCESS";
export const POSTS_DETAILS_REQUEST = "POSTS_DETAILS_REQUEST";
export const POSTS_DETAILS_SUCCESS = "POSTS_DETAILS_SUCCESS";

export const postsRequest = () => ({
  type: POSTS_REQUEST
});

export const postsSuccess = data => ({
  type: POSTS_SUCCESS,
  payload: {
    data
  }
});

export const postsByCategoryRequest = repository => ({
  type: POSTS_CATEGORY_REQUEST,
  payload: repository
});

export const postsByCategorySuccess = data => ({
  type: POSTS_CATEGORY_SUCCESS,
  payload: {
    data
  }
});

export const postsDetailsRequest = id => ({
  type: POSTS_DETAILS_REQUEST,
  payload: id
});

export const postsDetailsSuccess = data => ({
  type: POSTS_DETAILS_SUCCESS,
  payload: {
    data
  }
});

export const POSTS_REQUEST = "POSTS_REQUEST";
export const POSTS_SUCCESS = "POSTS_SUCCESS";
export const POSTS_CATEGORY_REQUEST = "POSTS_CATEGORY_REQUEST";
export const POSTS_CATEGORY_SUCCESS = "POSTS_CATEGORY_SUCCESS";
export const POSTS_DETAILS_REQUEST = "POSTS_DETAILS_REQUEST";
export const POSTS_DETAILS_SUCCESS = "POSTS_DETAILS_SUCCESS";
export const POST_UPDATE_VOTE_REQUEST = "POST_UPDATE_VOTE_REQUEST";
export const POST_UPDATE_VOTE_SUCCESS = "POST_UPDATE_VOTE_SUCCESS";

export const POSTS_ORDERED = "POSTS_ORDERED";

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

export const postsUpdateVoteRequest = (id, option) => ({
  type: POST_UPDATE_VOTE_REQUEST,
  payload: {
    id,
    option
  }
});

export const postsUpdateVoteSuccess = data => ({
  type: POST_UPDATE_VOTE_SUCCESS,
  payload: {
    data
  }
});

export const postOrdered = data => ({
  type: POSTS_ORDERED,
  payload: {
    data
  }
});

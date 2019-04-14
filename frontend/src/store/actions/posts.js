export const POSTS_REQUEST = 'POSTS_REQUEST'
export const POSTS_SUCCESS = 'POSTS_SUCCESS'

export const postsRequest = () => ({
  type: POSTS_REQUEST,
})

export const postsSuccess = data => ({
  type: POSTS_SUCCESS,
  payload: {
    data
  }
})
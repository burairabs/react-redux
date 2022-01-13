import { GET_POSTS, SET_MESSAGE, POSTS_FAIL } from "./types";
import * as auth from "../../api/api";

export const getPosts = () => (dispatch) => {
  auth.fetchPosts()
    .then(
      (data) => {
        dispatch({
          type: GET_POSTS,
          payload: data
        });

        return Promise.resolve();
      },
      (error) => {
        const message =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();
  
        dispatch({
          type: POSTS_FAIL,
        });
  
        dispatch({
          type: SET_MESSAGE,
          payload: message,
        });
  
        return Promise.reject();
      }
      )
};
import { GET_POSTS } from "../actions/types";

const initialState = {
    posts: null
};

function dataReducer(state = initialState, action) {
    const { type, payload } = action;

  switch (type) {
    case GET_POSTS:
        return {
          ...state,
          posts: payload,
        };

    default:
      return state;
  }
}

export default dataReducer
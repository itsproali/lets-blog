import {
  GET_BLOGS,
  GET_BLOG_DETAILS,
  START_LOADING,
} from "../actionTypes/actionTypes";

const initialState = {
  loading: false,
  blogs: [],
  current_blog: null,
  reading_history: [],
};

const blogReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_BLOGS:
      return {
        ...state,
        loading: false,
        blogs: action.payload,
      };
    case GET_BLOG_DETAILS:
      return {
        ...state,
        loading: false,
        current_blog: action.payload,
      };

    case START_LOADING:
      return {
        ...state,
        loading: true,
      };

    default:
      return state;
  }
};

export default blogReducer;

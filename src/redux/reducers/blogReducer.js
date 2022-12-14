import {
  ADD_TO_HISTORY,
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
    case START_LOADING:
      return {
        ...state,
        loading: true,
      };
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
    case ADD_TO_HISTORY:
      const exist = state.reading_history.find(
        (blog) => blog._id === action.payload._id
      );
      if (exist) {
        return {
          ...state,
        };
      }
      return {
        ...state,
        reading_history: [...state.reading_history, action.payload],
      };
    default:
      return state;
  }
};

export default blogReducer;

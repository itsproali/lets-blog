import {
  ADD_NEW_BLOG,
  ADD_TO_HISTORY,
  FILTER_BLOG,
  GET_BLOGS,
  GET_BLOG_DETAILS,
  SET_SORT,
  SORT_FIRST_UPLOAD,
  SORT_LAST_UPLOAD,
  SORT_MOST_VIEWED,
  START_LOADING,
  SET_CURRENT_BLOG,
  UPDATE_BLOG,
  DELETE_BLOG,
} from "../actionTypes/actionTypes";

const initialState = {
  loading: false,
  blogs: [],
  current_blog: null,
  reading_history: [],
  sort: "first",
  filter: null,
  filtered: [],
};

const blogReducer = (state = initialState, action) => {
  switch (action.type) {
    // Start Loading
    case START_LOADING:
      return {
        ...state,
        loading: true,
      };
    // Get all blogs
    case GET_BLOGS:
      return {
        ...state,
        loading: false,
        blogs: action.payload,
        filter: null,
        filtered: [],
        current_blog: null,
      };
    // Get a specific blog details
    case GET_BLOG_DETAILS:
      return {
        ...state,
        loading: false,
        current_blog: state.blogs.find(blog => blog._id === action.payload),
      };
    // Add blog to reading history
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
        reading_history: [action.payload, ...state.reading_history],
      };
    // Set Sort
    case SET_SORT:
      return {
        ...state,
        sort: action.payload,
      };
    // Sort by Last Upload
    case SORT_LAST_UPLOAD:
      const descending = state.blogs.sort((a, b) => b.blog_no - a.blog_no);
      return {
        ...state,
        blogs: descending,
      };
    // Sort by First Upload
    case SORT_FIRST_UPLOAD:
      const ascending = state.blogs.sort((a, b) => a.blog_no - b.blog_no);
      return {
        ...state,
        blogs: ascending,
      };
    // Sort by most viewed
    case SORT_MOST_VIEWED:
      const sorted = state.blogs.sort((a, b) => b.views - a.views);
      return {
        ...state,
        blogs: sorted,
      };
    // Filter Blogs
    case FILTER_BLOG:
      const filtered = state.blogs.filter(
        (item) =>
          item.title.toLowerCase().includes(action.payload.toLowerCase()) ||
          item.tags.includes(action.payload)
      );
      return {
        ...state,
        filter: action.payload,
        filtered: filtered,
      };
    // Add New Blog
    case ADD_NEW_BLOG:
      return {
        ...state,
        blogs: [
          ...state.blogs,
          { _id: action.payload._id, ...action.payload.blog },
        ],
      };
    // Set Current blog for getting blog data
    case SET_CURRENT_BLOG:
      return {
        ...state,
        current_blog: action.payload,
      };
    // Update a Blog
    case UPDATE_BLOG:
      const updatedBlog = state.blogs;
      const index = state.blogs.findIndex(
        (blog) => blog._id === action.payload._id
      );
      updatedBlog[index] = action.payload;

      return {
        ...state,
        blogs: updatedBlog,
      };
      // Delete a Blog
      case DELETE_BLOG:
        const newBlogs = state.blogs.filter(blog => blog._id !== action.payload)
        return {
          ...state,
          loading: false,
          blogs: newBlogs
        }
    default:
      return state;
  }
};

export default blogReducer;

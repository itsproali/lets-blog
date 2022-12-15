import {
  DELETE_BLOG,
  SET_CURRENT_BLOG,
  START_LOADING,
  UPDATE_BLOG,
} from "../actionTypes/actionTypes";
import axios from "axios";

export const setCurrentBlog = (blog) => {
  return {
    type: SET_CURRENT_BLOG,
    payload: blog,
  };
};

export const updateBlogAction = (blog) => {
  return async (dispatch) => {
    const { data } = await axios.patch(
      "https://lets-blog-server.vercel.app/update-blog",
      blog
    );
    if (data.success) {
      dispatch({ type: UPDATE_BLOG, payload: blog });
    }
  };
};

export const deleteBlogAction = (blogId) => {
  return async (dispatch) => {
    dispatch({ type: START_LOADING });
    const { data } = await axios.delete(
      `https://lets-blog-server.vercel.app/delete-blog/${blogId}`
    );
    if (data.success) {
      dispatch({ type: DELETE_BLOG, payload: blogId });
    }
  };
};

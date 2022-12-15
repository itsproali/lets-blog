import axios from "axios";
import { GET_BLOG_DETAILS, START_LOADING } from "../actionTypes/actionTypes";

const getBlogDetails = (blogId) => {
  return async (dispatch) => {
    dispatch({ type: START_LOADING });

    // Fetch Blog Data
    const { data } = await axios.get(
      `https://lets-blog-server.vercel.app/blog/${blogId}`
    );
    if (data.success) {
      dispatch({ type: GET_BLOG_DETAILS, payload: data.data });
    }
  };
};

export default getBlogDetails;

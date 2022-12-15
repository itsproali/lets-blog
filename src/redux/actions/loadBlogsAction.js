import axios from "axios";
import { GET_BLOGS, START_LOADING } from "../actionTypes/actionTypes";

const loadBlogsAction = () => {
  return async (dispatch) => {
    dispatch({ type: START_LOADING });
    const { data } = await axios.get(
      "https://lets-blog-server.vercel.app/blogs"
    );
    if (data.success) {
      dispatch({ type: GET_BLOGS, payload: data.data });
    }
  };
};

export default loadBlogsAction;

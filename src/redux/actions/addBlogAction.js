import axios from "axios";
import { ADD_NEW_BLOG } from "../actionTypes/actionTypes";

const addBlogAction = (blog) => {
  return async (dispatch) => {
    const { data } = await axios.post(
      "https://lets-blog-server.vercel.app/add-blog",
      blog
    );
    if (data.success) {
      dispatch({
        type: ADD_NEW_BLOG,
        payload: { blog, _id: data.data.insertedId },
      });
    }
  };
};

export default addBlogAction;

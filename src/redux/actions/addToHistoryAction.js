import { ADD_TO_HISTORY } from "../actionTypes/actionTypes";
import axios from "axios";

const addToHistoryAction = (blog) => {
  return async (dispatch) => {
    const { data } = await axios.patch(
      "https://lets-blog-server.vercel.app/views-increment",
      { _id: blog._id, views: blog.views + 1 }
    );
    console.log(data);
    dispatch({ type: ADD_TO_HISTORY, payload: blog });
  };
};

export default addToHistoryAction;

import axios from "axios";
import { GET_BLOGS } from "../actionTypes/actionTypes";

const loadBlogsAction = () => {
  return async (dispatch, getState) => {
    const { data } = await axios.get("http://localhost:5000/blogs");
    if (data.success) {
      dispatch({ type: GET_BLOGS, payload: data.data });
    }
  };
};

export default loadBlogsAction;

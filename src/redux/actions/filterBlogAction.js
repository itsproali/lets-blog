import { FILTER_BLOG } from "../actionTypes/actionTypes";

const filterBlogAction = (value) => {
  return {
    type: FILTER_BLOG,
    payload: value,
  };
};

export default filterBlogAction;

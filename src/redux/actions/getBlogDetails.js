import { GET_BLOG_DETAILS } from "../actionTypes/actionTypes";

const getBlogDetails = (blogId) => {
  return { type: GET_BLOG_DETAILS, payload: blogId };
};

export default getBlogDetails;

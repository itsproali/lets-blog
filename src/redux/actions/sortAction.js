import {
  SET_SORT,
  SORT_FIRST_UPLOAD,
  SORT_LAST_UPLOAD,
  SORT_MOST_VIEWED,
} from "../actionTypes/actionTypes";

export const setSort = (value) => {
  return {
    type: SET_SORT,
    payload: value,
  };
};

export const sortLastUpload = () => {
  return {
    type: SORT_LAST_UPLOAD,
  };
};
export const sortFirstUpload = () => {
  return {
    type: SORT_FIRST_UPLOAD,
  };
};
export const sortMostViewed = () => {
  return {
    type: SORT_MOST_VIEWED,
  };
};

import React from "react";
import { useParams } from "react-router-dom";

/**
 * _id
 * title
 * description
 * img
 * tags
 * publish_date
 * blog_no
 * author_name
 *
 */

const BlogDetails = () => {
  const { id } = useParams();
  return (
    <div>
      <h1>{id}</h1>
    </div>
  );
};

export default BlogDetails;

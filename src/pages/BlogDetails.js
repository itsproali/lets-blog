import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import getBlogDetails from "../redux/actions/getBlogDetails";
import Loading from "../components/Loading/Loading";
import addToHistoryAction from "../redux/actions/addToHistoryAction";
import filterBlogAction from "../redux/actions/filterBlogAction";

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
  const { current_blog, loading } = useSelector((state) => state.blog);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    if (id) {
      dispatch(getBlogDetails(id));
    }
  }, [dispatch, id]);

  useEffect(() => {
    if (current_blog) {
      dispatch(addToHistoryAction(current_blog));
    }
  }, [dispatch, current_blog]);

  // Handle Filter
  const handleFilter = (tag) => {
    dispatch(filterBlogAction(tag));
    navigate("/");
  };

  if (loading) {
    return <Loading />;
  }

  if (!current_blog) {
    return <p>No Blog Found</p>;
  }

  const { title, img, description, tags, author, blog_no, views } =
    current_blog;

  return (
    <div className="container mx-auto my-8">
      <div className="grid place-items-center">
        <img src={img} alt={title} />
      </div>
      <h1 className="text-4xl font-bold text-center my-10">{title}</h1>
      <div className="bg-white rounded-lg shadow-lg p-6">
        <div className="flex items-center justify-between mb-4">
          <h4 className="text-xl font-medium">
            Blog No: <span className="text-primary font-bold">{blog_no}</span>
          </h4>
          <h4 className="text-xl font-medium">
            Author: <span className="text-primary font-bold">{author}</span>
          </h4>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 mt-8">
          <div className="w-full lg:col-span-3">
            <b>Description: </b>
            {description}
          </div>
          <div className="bg-[#f0f0f0] rounded-lg p-2 shadow-lg">
            <h3 className="text-xl font-semibold text-secondary">Tags</h3>
            <hr />
            <div className="mt-3 mb-12 flex items-center flex-wrap gap-2">
              {tags.map((tag) => (
                <button
                  key={tag}
                  className="rounded bg-white px-4 py-1 text-black shadow"
                  onClick={() => handleFilter(tag)}
                >
                  {tag}
                </button>
              ))}
            </div>
            <h3 className="text-xl font-semibold text-secondary">
              Total Views: <span className="text-primary">{views}</span>
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;

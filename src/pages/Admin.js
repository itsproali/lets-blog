import React, { useEffect } from "react";
import { HiPlus } from "react-icons/hi";
import { BiEdit, BiTrash } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../components/Loading/Loading";
import loadBlogsAction from "../redux/actions/loadBlogsAction";
import "../Styles/styles.css";
import { Link, useNavigate } from "react-router-dom";
import {
  deleteBlogAction,
  setCurrentBlog,
} from "../redux/actions/updateBlogAction";

const Admin = () => {
  const { blogs, loading } = useSelector((state) => state.blog);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (blogs.length === 0) {
      dispatch(loadBlogsAction());
    }
  }, [4]);

const handleDelete = (blogId) => {
  const isConfirm = window.confirm("Are you sure you want to delete this blog..?");
  if(isConfirm) {
    dispatch(deleteBlogAction(blogId))
  }
}

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="">
      <h1 className="text-2xl md:text-4xl font-semibold text-center mt-8 mb-16">
        Everything in your <span className="text-primary">Control</span>
      </h1>

      <div className="container mx-auto mb-8 p-6 bg-white rounded-lg min-w-[750px] overflow-x-auto">
        <div className="flex justify-end">
          <Link to="/add-new">
            <button className="ml-auto flex items-center gap-1 text-white bg-primary rounded py-2 px-6 font-semibold hover:bg-secondary duration-300 active:scale-95">
              <HiPlus />
              <span>ADD NEW</span>
            </button>
          </Link>
        </div>

        <div className="mt-4">
          {blogs.length === 0 ? (
            <p className="text-center text-3xl my-4 font-medium text-secondary">
              There's No Blog
            </p>
          ) : (
            <table className="blog_table">
              <thead>
                <tr>
                  <th>No.</th>
                  <th>Image</th>
                  <th>Title</th>
                  <th>Views</th>
                  <th>Author</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {blogs.map((blog) => (
                  <tr key={blog._id}>
                    <td>{blog.blog_no}</td>
                    <td className="grid place-items-center">
                      <img src={blog.img} alt="blog" width={40} height={40} />
                    </td>
                    <td>{blog.title}</td>
                    <td>{blog.views}</td>
                    <td>{blog.author}</td>
                    <td className="flex items-center justify-center gap-2">
                      <button
                        className="w-10 h-10 rounded-full text-success bg-gray-200 bg-opacity-40 grid place-items-center hover:bg-green-200"
                        title="Edit Blog"
                        onClick={() => {
                          dispatch(setCurrentBlog(blog));
                          navigate(`/update-blog/${blog._id}`);
                        }}
                      >
                        <BiEdit size={25} />
                      </button>
                      <button
                        className="w-10 h-10 rounded-full text-error bg-gray-200 bg-opacity-40 grid place-items-center hover:bg-red-200"
                        title="Delete Blog"
                        onClick={() => handleDelete(blog._id)}
                      >
                        <BiTrash size={25} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  );
};

export default Admin;

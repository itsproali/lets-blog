import React from "react";
import { useSelector } from "react-redux";
import BlogCart from "./BlogCart";
import Loading from "./Loading/Loading";

const Blogs = () => {
  const { blogs, loading } = useSelector((state) => state.blog);

  if (loading) {
    return <Loading />;
  }
  return (
    <div className="container mx-auto">
      <div className="flex items-center justify-between my-4">
        <h3 className="text-3xl font-semibold text-primary">Trending Blogs</h3>
        <label htmlFor="sort" className="flex items-center gap-2">
          <span className="font-semibold text-secondary text-xl">
            Sort By:{" "}
          </span>
          <select
            name="sort"
            id="sort"
            className="focus:outline-none py-1 px-3 bg-white rounded"
            // onChange={(e) => setSort(e.target.value)}
          >
            <option value="Last Upload">Last Upload</option>
            <option value="First Upload">First Upload</option>
          </select>
        </label>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-4">
        {blogs.map((blog) => (
          <BlogCart blog={blog} key={blog._id} />
        ))}
      </div>
    </div>
  );
};

export default Blogs;

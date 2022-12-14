import React from "react";
import { Link } from "react-router-dom";

const BlogCart = ({ blog }) => {
  return (
    <Link
      // key={blog._id}
      to={`/blog/${blog._id}`}
      className="rounded-lg bg-white shadow-lg flex flex-col justify-between h-[500px]"
    >
      <img
        src={blog.img}
        alt={blog.title}
        className="block w-full h-[70%] rounded-t-lg"
      />
      <div className="p-4">
        <h3 className="text-2xl text-secondary font-semibold">{blog.title}</h3>
        <p className="">{blog.description.slice(0, 100)}</p>
      </div>
    </Link>
  );
};

export default BlogCart;

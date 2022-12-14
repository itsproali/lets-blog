import React from "react";
import { useSelector } from "react-redux";
import BlogCart from "../components/BlogCart";

const ReadingHistory = () => {
  const { reading_history } = useSelector((state) => state.blog);

  return (
    <div className="container mx-auto">
      <h1 className="text-2xl md:text-4xl text-center font-bold my-8">
        Reading <span className="text-primary">History</span>
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-4">
        {reading_history.map((blog) => (
          <BlogCart blog={blog} key={blog._id} />
        ))}
      </div>
    </div>
  );
};

export default ReadingHistory;

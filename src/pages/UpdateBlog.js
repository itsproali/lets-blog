import React from "react";
import { useParams } from "react-router-dom";
import BlogForm from "../components/BlogForm";

const UpdateBlog = () => {
  const { id } = useParams();
  return (
    <div className="container mx-auto">
      <h1 className="text-2xl md:text-4xl text-center font-bold my-8">
        Update <span className="text-primary">Blog {id}</span>
      </h1>

      <BlogForm type="update" />
    </div>
  );
};

export default UpdateBlog;

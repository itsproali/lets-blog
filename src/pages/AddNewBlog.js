import React from "react";

const AddNewBlog = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="container mx-auto">
      <h1 className="text-2xl md:text-4xl text-center font-bold my-8">
        Add New <span className="text-primary">Blog</span>
      </h1>

      <form
        onSubmit={handleSubmit}
        className="bg-white rounded-lg p-4 mb-8 w-full md:w-[700px] mx-auto shadow-lg"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-2 gap-y-5">
          <label htmlFor="title">
            <span className="block text-xs font-semibold text-gray-500">
              Blog Title
            </span>
            <input
              type="text"
              name="title"
              id="title"
              className="block w-full mt-1 py-2 px-3 rounded border focus:border-primary outline-none"
              placeholder="Enter a Blog title"
            />
          </label>
          <label htmlFor="img">
            <span className="block text-xs font-semibold text-gray-500">
              Image URL
            </span>
            <input
              type="text"
              name="img"
              id="img"
              className="block w-full mt-1 py-2 px-3 rounded border focus:border-primary outline-none"
              placeholder="https://img.png"
            />
          </label>

          <label htmlFor="author">
            <span className="block text-xs font-semibold text-gray-500">
              Author Name
            </span>
            <input
              type="text"
              name="author"
              id="author"
              className="block w-full mt-1 py-2 px-3 rounded border focus:border-primary outline-none"
              placeholder="Enter your name"
            />
          </label>
          <label htmlFor="tags">
            <span className="block text-xs font-semibold text-gray-500">
              Tags
            </span>
            <input
              type="text"
              name="tags"
              id="tags"
              className="block w-full mt-1 py-2 px-3 rounded border focus:border-primary outline-none"
              placeholder="persona, tutorial, science"
            />
          </label>

          <label htmlFor="description" className="md:col-span-2">
            <span className="block text-xs font-semibold text-gray-500">
              Description
            </span>
            <textarea
              name="description"
              id="description"
              className="block w-full mt-1 py-2 px-3 rounded border focus:border-primary outline-none"
              rows="6"
              placeholder="Describe about the blog..!"
            ></textarea>
          </label>
        </div>
        <label htmlFor="submit" className="block my-4">
          <input type="submit" value="" />
          <button className="bg-primary hover:bg-secondary text-white text-center w-full py-2 rounded active:scale-95 duration-300">
            Submit
          </button>
        </label>
      </form>
    </div>
  );
};

export default AddNewBlog;

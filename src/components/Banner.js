import React from "react";

const Banner = () => {
  return (
    <div className="h-[50vh] w-full flex flex-col items-center justify-center gap-10">
      <h2 className="text-3xl sm:text-5xl font-semibold max-w-2xl text-center">
        Share your stories, experiences by{" "}
        <span className="text-primary font-bold">Blogs</span>
      </h2>

      <div className="flex items-center">
        <input
          type="text"
          name="search"
          id="search"
          className="block py-2 pl-3 pr-28 rounded-lg w-full sm:w-[600px] focus:outline-primary"
          placeholder="Search a blog"
        />
        <button className="py-2 px-6 bg-primary text-white font-medium -ml-24 rounded-lg">
          Search
        </button>
      </div>
    </div>
  );
};

export default Banner;

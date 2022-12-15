import React from "react";
import { useDispatch } from "react-redux";
import filterBlogAction from "../redux/actions/filterBlogAction";

const Banner = () => {
  const dispatch = useDispatch();
  const handleSearch = (e) => {
    e.preventDefault();
    const search = e.target.search.value;
    if (search) {
      dispatch(filterBlogAction(search));
    }
  };
  return (
    <div className="h-[50vh] w-full flex flex-col items-center justify-center gap-10">
      <h2 className="text-3xl sm:text-5xl font-semibold max-w-2xl text-center">
        Let's <span className="text-primary font-bold">Blog</span> your stories
        and experiences
      </h2>

      <form onSubmit={handleSearch} className="flex items-center">
        <input
          type="text"
          name="search"
          id="search"
          className="block py-2 pl-3 pr-28 rounded-lg w-full sm:w-[600px] focus:outline-primary"
          placeholder="Search a blog"
        />
        <label htmlFor="submit">
          <input id="submit" name="submit" type="submit" value="" />
          <button className="py-2 px-3 sm:px-6 bg-primary text-white font-medium -ml-20 sm:ml-[-6.5rem] rounded-lg">
            Search
          </button>
        </label>
      </form>
    </div>
  );
};

export default Banner;

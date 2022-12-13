import React, { useEffect, useState } from "react";
import Banner from "../components/Banner";
import Blogs from "../components/Blogs";
import { useDispatch } from "react-redux";
import loadBlogsAction from "../redux/actions/loadBlogsAction";

const Home = () => {
  const [sort, setSort] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadBlogsAction());
  });
  return (
    <>
      <Banner />
      <div className="container mx-auto flex items-center justify-between my-4">
        <h3 className="text-3xl font-semibold text-primary">Trending Blogs</h3>
        <label htmlFor="sort" className="flex items-center gap-2">
          <span className="font-semibold text-secondary text-xl">
            Sort By:{" "}
          </span>
          <select
            name="sort"
            id="sort"
            className="focus:outline-none py-1 px-3 bg-white rounded"
            onChange={(e) => setSort(e.target.value)}
          >
            <option value="Last Upload">Last Upload</option>
            <option value="First Upload">First Upload</option>
          </select>
        </label>
      </div>
      <Blogs />
    </>
  );
};

export default Home;

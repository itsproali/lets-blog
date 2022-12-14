import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Banner from "../components/Banner";
import Blogs from "../components/Blogs";
import loadBlogsAction from "../redux/actions/loadBlogsAction";

const Home = () => {
  const { filter } = useSelector((state) => state.blog);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!filter) {
      dispatch(loadBlogsAction());
    }
  }, [filter]);
  return (
    <>
      <Banner />
      <Blogs />
    </>
  );
};

export default Home;

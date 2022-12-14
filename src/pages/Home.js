import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import Banner from "../components/Banner";
import Blogs from "../components/Blogs";
import loadBlogsAction from "../redux/actions/loadBlogsAction";

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadBlogsAction());
  });
  return (
    <>
      <Banner />
      <Blogs />
    </>
  );
};

export default Home;

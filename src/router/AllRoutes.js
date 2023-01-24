import React from "react";
import Home from '../views/Home'
import { Routes, Route } from "react-router-dom";
import ScrollTopBehaviour from "../components/ScrollTopBehaviour";

const AllRoutes = () => {
  return (
    <>
      <ScrollTopBehaviour />
      <Routes>
        <Route path="/" element={<Home/>} />
      </Routes>
    </>
  );
};

export default AllRoutes;

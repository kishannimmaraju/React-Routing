import React from "react";
import Navbar from "../Components/Navbar";
import Banner from "../Components/Banner";
import Courses from "../Components/Courses/Courses";

function Homepage() {
  return (
    <>
      <Navbar />
      <Banner />
      <Courses />
    </>
  );
}

export default Homepage;

import React from "react";
import course from "./course";

function Courses() {
  return (
    <>
      <div className="container ">
        <div className="row">
          {course.map((item) => (
            <Servicecard data={item} />
          ))}
        </div>
      </div>
    </>
  );
}

function Servicecard(props) {
  return (
    <div className="col-lg-4 mt-4">
      <div className="course-img">
        <img src={props.data.img} alt="" />
        <div className="course-content">
          <p className="typecourse">{props.data.typecourse}</p>
          <h4 className="cardtitle">{props.data.cardtitle}</h4>
          <p className="carddescription">{props.data.carddescription}</p>
        </div>
      </div>
    </div>
  );
}

export default Courses;

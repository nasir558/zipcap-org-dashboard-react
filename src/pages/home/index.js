import React from "react";
import Layout from "../Layout/Layout";
import Counts from "./counts";
import CoursePerformance from "./coursePerformance";
import BookIcon from "../../assets/images/book-icon-red-bg.png";
import EducationIcon from "../../assets/images/education-icon-orange-bg.png";
import GroupIcon from "../../assets/images/group-icon.png";

function Index() {
  const dataCounts = [
    {
      icon: BookIcon,
      title: "All Courses",
      number: "350",
      textColorClass: "redText"
    },
    {
      icon: EducationIcon,
      title: "Total Students",
      number: "2750",
      textColorClass: "orangeText"
    },
    {
      icon: GroupIcon,
      title: "Public Enrollments ",
      number: "$7000",
      textColorClass: "yellowText"
    }
  ]
  return (
    <Layout>
      <div>
        <Counts 
          title = "University of Toronto"
          data = {dataCounts}
        />
        <CoursePerformance />
      </div>
    </Layout>
  );
}

export default Index;

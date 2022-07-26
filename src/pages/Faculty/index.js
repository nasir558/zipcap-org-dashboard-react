import React from "react";
import Layout from "../Layout/Layout";
import Faculty from "./facultyList";
import UserThumb from "../../assets/images/user-pic-thumb.png";

function Index() {
  const FacultyList = [
    {
      name: "Linda Melisa",
      designation: "Professor",
      memberThumbnail: UserThumb,
      department: "Computer Science",
      status: true
    },
    {
      name: "Chia Dikset",
      designation: "Lectrurer",
      memberThumbnail: UserThumb,
      department: "Computer Science",
      status: true
    },
    {
      name: "Linda Melisa",
      designation: "Professor",
      memberThumbnail: UserThumb,
      department: "Computer Science",
      status: false
    },
    {
      name: "Chia Dikset",
      designation: "Professor",
      memberThumbnail: UserThumb,
      department: "Computer Science",
      status: true
    },
    {
      name: "Linda Melisa",
      designation: "Professor",
      memberThumbnail: UserThumb,
      department: "Computer Science",
      status: false
    },
  ];
  return (
    <Layout>
      <div className="allCourses">
        <Faculty
          ShowSearchForm
          data={FacultyList}   
        />
      </div>
    </Layout>
  );
}

export default Index;

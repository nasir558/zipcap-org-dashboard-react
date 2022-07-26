import React from "react";
import FilterForm from "./filterForm";
import EnrollementsData from "./dataTable";
import UserThumb from "../../assets/images/user-pic-thumb.png";

const EnrollmentsView = () => {

    const dataEnrollementsData = [
        {
            studentThumbnail: UserThumb,
            name: "Duke",
            email: "duke@example.com",
            status: false

        },
        {
            studentThumbnail: UserThumb,
            name: "Amir",
            email: "amir@example.com",
            status: false

        },
        {
            studentThumbnail: UserThumb,
            name: "Jhon",
            email: "Jhon@example.com",
            status: false

        },
        {
            studentThumbnail: UserThumb,
            name: "Duke",
            email: "duke@example.com",
            status: false

        },
        {
            studentThumbnail: UserThumb,
            name: "Duke",
            email: "duke@example.com",
            status: false

        },
    ]

    const dataFormSelectInstructor = [
        {
            value: "",
            label: "Select Instructor"
        },
        {
            value: "Instructor-one",
            label: "Instructor One"
        },
        {
            value: "Instructor-two",
            label: "Instructor Two"
        }
    ]
    const dataFormSelectCourse = [
        {
            value: "",
            label: "Select Course"
        },
        {
            value: "Course-one",
            label: "Course One"
        },
        {
            value: "Course-two",
            label: "Course Two"
        }
    ]

    return (
        <div>

            <FilterForm 
                InstructorData = {dataFormSelectInstructor}
                CourseData = {dataFormSelectCourse}
                inputPlaceHolder = "Search by name"
            />
            <EnrollementsData
                data={dataEnrollementsData}
            />

        </div>
    );
};

export default EnrollmentsView;

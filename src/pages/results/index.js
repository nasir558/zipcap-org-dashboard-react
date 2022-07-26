import React from "react";
import Layout from "../Layout/Layout";
import FilterForm from "./filterForm";
import ResultsData from "./resultData";

function Index() {
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
    const dataFormSelectExam = [
        {
            value: "",
            label: "Select Exam"
        },
        {
            value: "Exam-one",
            label: "Exam One"
        },
        {
            value: "Exam-two",
            label: "Exam Two"
        }
    ]

    return (
        <Layout>
            <div className="examinations">
                <h3 className="titleDashboard mb-28px text-lg font-semibold">
                    Results
                </h3>
                <div>
                    <FilterForm
                        InstructorData={dataFormSelectInstructor}
                        CourseData={dataFormSelectCourse}
                        ExamData = {dataFormSelectExam}
                        inputPlaceHolder="Search by name"
                    />
                    <ResultsData />
                </div>
            </div>
        </Layout>
    );
}

export default Index;

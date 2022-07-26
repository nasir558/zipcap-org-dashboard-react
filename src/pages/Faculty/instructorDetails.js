import React from "react";
import { Table, Thead, Tbody, Tr, Th, Td } from "react-super-responsive-table";
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css";
import Layout from "../Layout/Layout";
import { Link } from "react-router-dom";
import Avator from "../../assets/images/avatar.png";
import LeftArrow from "../../assets/images/left-arrow.png";

const InstructorDetail = () => {

    const dataCourses = [
        {
            Title: "01. Learn IOS Development",
            PublishDate: "01/06/2021",
            Enrollments: "50",
            Department: "Mathematics"

        },
        {
            Title: "02. Learn IOS Development",
            PublishDate: "01/06/2021",
            Enrollments: "50",
            Department: "Computer Science"

        },
        {
            Title: "03. Learn IOS Development",
            PublishDate: "01/06/2021",
            Enrollments: "50",
            Department: "Mathematics"

        },
        {
            Title: "04. Learn IOS Development",
            PublishDate: "01/06/2021",
            Enrollments: "50",
            Department: "Computer Science"

        },
        {
            Title: "05. Learn IOS Development",
            PublishDate: "01/06/2021",
            Enrollments: "50",
            Department: "Mathematics"

        },
    ]

    return (
        <Layout>
            <div className="examinations">
                <div className="flex mb-28px">
                    <Link
                        to="/faculty"
                        title="Back to results main page"
                        className="red2Bg shadow-md text-white hover:bg-black text-base font-semibold capitalize px-6 py-3.5 rounded-lg transition-all duration-300"
                    >
                        <span className="flex flex-row items-center space-x-2">
                            <img src={LeftArrow} alt="" />
                            <span>Faculty list</span>
                        </span>
                    </Link>
                </div>
                <h3 className="titleDashboard mb-28px text-lg font-semibold">
                    Instructor details
                </h3>
                <div>
                    <div className="Courses mainBoxShadow rounded-lg bg-white mt-8 p-2 lg:p-4 xl:p-8">
                        <div className="grid grid-col-1 md:grid-cols-2 gap-6 items-center">
                            <div>
                                <div className="flex flex-wrap items-center space-x-6">
                                    <div className="block w-117px h-117px rounded-full overflow-hidden">
                                        <img src={Avator} alt="" className="w-full h-auto" />
                                    </div>
                                    <div>
                                        <p className="text-sm orangeText transition-all duration-300">
                                            Professor
                                        </p>
                                        <p className="font-medium text-base greyText mt-2px">John M David</p>
                                    </div>
                                </div>
                            </div>
                            <div className="md:text-right">
                                <p className="text-base greyText">Department: <span className="redText">Computer Science</span></p>
                                <p className="text-base greyText mt-12px">Total Courses: <span className="redText">05</span></p>
                                <p className="text-base greyText mt-12px">Total Students: <span className="redText">532</span></p>
                            </div>
                        </div>
                    </div>
                </div>
                <h3 className="titleDashboard mb-28px mt-28px text-lg font-semibold">
                    Courses
                </h3>
                <div>
                    <div className="Courses mainBoxShadow rounded-lg bg-white mt-8 p-2 lg:p-4 xl:p-8">
                        <Table>
                            <Thead className="tableHeader">
                                <Tr>
                                    <Th className="text-left lg:pl-16 text-base leading-7 font-medium blackText">
                                        Title
                                    </Th>
                                    <Th className="text-center text-base leading-7 font-medium blackText">
                                        Publish date
                                    </Th>
                                    <Th className="text-center text-base leading-7 font-medium blackText">
                                        Enrollments
                                    </Th>
                                    <Th className="text-center text-base leading-7 font-medium blackText">
                                        Department
                                    </Th>
                                </Tr>
                            </Thead>
                            <Tbody>
                                {dataCourses.map((content, index) => (
                                    <Tr key={index}>
                                        <Td className="text-sm greyText">
                                            <Link to="/" className="transition-all duration-300">
                                                {content.Title}
                                            </Link>
                                        </Td>
                                        <Td className="text-sm greyText">{content.PublishDate}</Td>
                                        <Td className="text-sm greyText">{content.Enrollments}</Td>
                                        <Td className="text-sm greyText">{content.Department}</Td>

                                    </Tr>
                                ))}
                            </Tbody>
                        </Table>
                        <div className="pagination mt-12 space-x-3.5 flex items-center justify-center">
                            <button type="button" className="previous">{`<`}</button>
                            <button type="button" className="active">
                                1
                            </button>
                            <button type="button">2</button>
                            <button type="button">3</button>
                            <button type="button" className="more">
                                .
                            </button>
                            <button type="button" className="more">
                                .
                            </button>
                            <button type="button" className="more">
                                .
                            </button>
                            <button type="button">10</button>
                            <button type="button" className="next">{`>`}</button>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>

    );
};

export default InstructorDetail;

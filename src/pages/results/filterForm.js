import React from "react";
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css";
import SearchIcon from "../../assets/images/search.png";

const FilterForm = ({ InstructorData, CourseData, ExamData, inputPlaceHolder }) => {
    return (
        <div>
            <form className="mt-5 filterSearch">
                <div className="grid grid-cols-1 lg:grid-cols-4 items-center gap-12">
                    <select className="text-sm greyText bg-white py-3.5 pl-2.5 pr-8 transition-all duration-300 outline-none">
                        {InstructorData.map((content, index) => (
                            <option key={index} value={content.value}>{content.label}</option>
                        ))}
                    </select>
                    <select className="text-sm greyText bg-white py-3.5 pl-2.5 pr-8 transition-all duration-300 outline-none">
                        {CourseData.map((content, index) => (
                            <option key={index} value={content.value}>{content.label}</option>
                        ))}
                    </select>
                    <select className="text-sm greyText bg-white py-3.5 pl-2.5 pr-8 transition-all duration-300 outline-none">
                        {ExamData.map((content, index) => (
                            <option key={index} value={content.value}>{content.label}</option>
                        ))}
                    </select>
                    <div className="searchForm">
                        <div className="flex flex-row boxShadow">
                            <input type="text" name="" placeholder={inputPlaceHolder} className="text-sm px-2.5 outline-none flex-grow transition-all duration-300" />
                            <button type="submit" className="red2Bg px-4 hover:bg-black transition-all duration-300">
                                <img src={SearchIcon} alt="search icon" aria-hidden="true" className="w-22px flex-shrink-0 h-auto" />
                            </button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default FilterForm;

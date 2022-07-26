import React from "react";
import SearchForm from "./searchForm";
import { Table, Thead, Tbody, Tr, Th, Td } from "react-super-responsive-table";
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css";
import { Link } from "react-router-dom";
import DeleteIcon from "../../assets/images/delete.png";
import FacultyForm from "./addFacultyForm";

const Faculty = ({
  ShowSearchForm,
  data
}) => {
  return (
    <div>
      <div className="listHeader">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <h3 className="titleDashboard mb-28px text-lg font-semibold">
            Faculty
          </h3>
          <FacultyForm />         
        </div>
      </div>
      {!!ShowSearchForm && <SearchForm />}

      <div className="Courses mainBoxShadow rounded-lg bg-white mt-8 p-2 lg:p-4 xl:p-8">
        <Table>
          <Thead className="tableHeader">
            <Tr>
              <Th className="text-left lg:pl-24 text-base leading-7 font-medium">
                Name
              </Th>
              <Th className="text-center text-base leading-7 font-medium">
                Department
              </Th>

              <Th className="text-center text-base leading-7 font-medium">
                Status
              </Th>
              <Th className="text-center text-base leading-7 font-medium">
                Action
              </Th>
            </Tr>
          </Thead>
          <Tbody>
            {data.map((content, index) => (
              <Tr key={index}>
                <Td className="text-sm">
                  <Link
                    to="/instructor-detail"
                    title={content.name}
                    className="transition-all duration-300"
                  >
                    <div className="flex items-center space-x-6">
                      <img src={content.memberThumbnail} alt={content.name} className="w-58px h-58px flex-shrink-0 rounded-full" />
                      <p className="text-sm">
                        <span className="orangeText block">{content.designation}</span>
                        <span className="block greyText mt-4px">{content.name}</span>
                      </p>
                    </div>
                  </Link>
                </Td>
                <Td className="text-sm">{content.department}</Td>

                <Td className="text-sm">
                  <label className="customCheckBoxBtn cursor-pointer">
                    <input type="checkbox" name="" className="hidden" />
                    <span className="checkBoxBase block">
                      <span className="checkBoxOff transition-all duration-300 flex items-center">
                        <span className="block checkBoxRoundBtn rounded-full bg-white w-30px h-30px transition-all duration-300"></span>
                      </span>
                    </span>
                  </label>
                </Td>
                <Td className="text-sm">
                  <button type="button" className="w-16px">
                    <img src={DeleteIcon} alt="" className="w-full h-auto" />
                  </button>
                </Td>
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
    </div >
  );
};

export default Faculty;

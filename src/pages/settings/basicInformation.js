import React from "react";
import "react-datepicker/dist/react-datepicker.css";
import Autocomplete from "react-google-autocomplete";

const BasicInformations = () => {
  return (
    <div className="Form">
      <h4 className="mb-5">Basic Information</h4>
      <form>
        <div className="flex flex-col space-y-8">
          <div className="block max-w-471px">
            <label
              htmlFor="gender"
              className="block w-full mb-13px text-sm font-medium leading-6"
            >
              Organization type
            </label>
            <select
              id="gender"
              name=""
              className="block w-full px-24px transition-all duration-300"
            >
              <option value="male" selected>
                University
              </option>
              <option value="female">School</option>
            </select>
          </div>
          <div className="block max-w-471px basicInformation locationPicker">
            <label
              htmlFor="confirm-email"
              className="block w-full mb-13px text-sm font-medium leading-6"
            >
              City
            </label>
            <Autocomplete
              apiKey={"AIzaSyA16v2Y-D_uSN4eAOp_NhtNdSeT4eOIleI"}
              style={{ width: "100%" }}
              id="confirm-email"
              options={{
                types: ["(regions)"],
                componentRestrictions: { country: "pk" },
              }}
              defaultValue="Peshawar"
            />
          </div>
          <div>
            <div className="flex flex-col sm:flex-row space-y-6 sm:space-y-0 sm:space-x-6 justify-end formBtns mt-24">
              <button
                type="reset"
                className="redBorder rounded-lg shadow-md redText hover:bg-black hover:text-white hover:border-black text-base font-medium capitalize px-8 py-3.5 transition-all duration-300"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="red2Bg rounded-lg shadow-md text-white hover:bg-black text-base font-medium capitalize px-8 py-3.5 transition-all duration-300"
              >
                Update
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default BasicInformations;

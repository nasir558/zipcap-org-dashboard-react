import React from "react";
import { Link } from "react-router-dom";

const Navigation = ({ drawerStatus }) => {
  const pathName = window.location.pathname;
  return (
    <div
      className={`xl:w-1/5 px-20px pt-14 leftNavigationContainer slimScroll h-screen xl:sticky xl:top-0 z-20 moduleDrawer transition-all duration-300 ${drawerStatus}`}
    >
      <div className="navigationItems">
        <ul className="block w-full">
          <li>
            <Link
              to="/dashboard"
              className={`${
                pathName === "/dashboard" ? "active" : null
              } flex flex-row items-center space-x-4 font-medium transition-all duration-300`}
            >
              <span className="text-left">Dashboard</span>
            </Link>
          </li>
          <li>
            <Link
              to="/faculty"
              className={`${
                pathName === "/faculty" || pathName === "/instructor-detail" ? "active" : null
              } flex flex-row items-center space-x-4 font-medium transition-all duration-300`}
            >
              <span className="text-left">Faculty</span>
            </Link>
          </li>
          <li>
            <Link
              to="/enrollments"
              className={`${
                pathName === "/enrollments" ? "active" : null
              } flex flex-row items-center space-x-4 font-medium transition-all duration-300`}
            >
              <span className="text-left">Enrollments</span>
            </Link>
          </li>
          <li>
            <Link
              to="/results"
              className={`${
                pathName === "/results" ||  pathName === "/results-detail"  ? "active" : null
              } flex flex-row items-center space-x-4 font-medium transition-all duration-300`}
            >
              <span className="text-left">Results</span>
            </Link>
          </li>
          <li>
            <Link
              to="/attendance"
              className={`${
                pathName === "/attendance" ? "active" : null
              } flex flex-row items-center space-x-4 font-medium transition-all duration-300`}
            >
              <span className="text-left">Attendance</span>
            </Link>
          </li>
          <li>
            <Link
              to="/discussions"
              className={`${
                pathName === "/discussions" ? "active" : null
              } flex flex-row items-center space-x-4 font-medium transition-all duration-300`}
            >
              <span className="text-left">Discussions</span>
            </Link>
          </li>
          <li>
            <Link
              to="/ratings"
              className={`${
                pathName === "/ratings" ? "active" : null
              } flex flex-row items-center space-x-4 font-medium transition-all duration-300`}
            >
              <span className="text-left">Ratings</span>
            </Link>
          </li>
          <li>
            <Link
              to="/notifications"
              className={`${
                pathName === "/notifications" ? "active" : null
              } flex flex-row items-center space-x-4 font-medium transition-all duration-300`}
            >
              <span className="text-left">Notifications</span>
            </Link>
          </li>
        </ul>
        <h2 className="navTitle font-semibold">My Account</h2>
        <ul className="block w-full">
          <li>
            <Link
              to="/profile"
              className={`${
                pathName === "/profile" ? "active" : null
              } flex flex-row items-center space-x-4 font-medium transition-all duration-300`}
            >
              <span className="text-left">Profile</span>
            </Link>
          </li>
          <li>
            <Link
              to="#"
              className={`${
                pathName === "" ? "active" : null
              } flex flex-row items-center space-x-4 font-medium transition-all duration-300`}
            >
              <span className="text-left">My Package</span>
            </Link>
          </li>
          <li>
            <Link
              to="/settings"
              className={`${
                pathName === "/settings" ? "active" : null
              }  flex flex-row items-center space-x-4 font-medium transition-all duration-300`}
            >
              <span className="text-left">Settings</span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navigation;

import React from "react";
import { NavLink } from "react-router-dom";

const MyNavBar = () => {
  return (
    <div className="w-full h-[64px] bg-red-500 text-white flex justify-between items-center">
      <div className="derecha bg-green-500 flex justify-around w-60">
        <div className="home bg-blue-500  ">
          <NavLink
            className={({ isActive }) => (isActive ? "active" : "")}
            to="/"
          >
            Home
          </NavLink>
        </div>
        <div className="contacto bg-gray-500">
          <NavLink
            className={({ isActive }) => (isActive ? "active" : "")}
            to="/contact"
          >
            Contacto
          </NavLink>
        </div>
      </div>
      <div className="izquierda bg-yellow-500 w-1/3 lg:w-60 md:w-60">
        <div className="logo w-full ">
          <h1>logo</h1>
        </div>
      </div>
    </div>
  );
};

export default MyNavBar;

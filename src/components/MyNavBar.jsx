import React from "react";
import { NavLink } from "react-router-dom";

const MyNavBar = () => {
  return (
    <div className="w-full h-[64px] bg-pink-400 text-white flex justify-between items-center">
      <div className="derecha flex justify-around w-60">
        <div className="home  ">
          <NavLink
            className={({ isActive }) => (isActive ? "active" : "none")}
            to="/"
          >
            Home
          </NavLink>
        </div>
        <div className="contacto">
          <NavLink
            className={({ isActive }) => (isActive ? "active" : "none")}
            to="/contact"
          >
            Contacto
          </NavLink>
        </div>
      </div>
      <div className="izquierda w-1/3 lg:w-60 md:w-60">
        <div className="logo w-full ">
          <h1>logo</h1>
        </div>
      </div>
    </div>
  );
};

export default MyNavBar;

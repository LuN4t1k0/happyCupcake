import React from "react";
import imagen from "../img/404-transformed.png";
const PageNotFound = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center h-[calc(100vh-128px)] ">
      <div className="img">
        <img src={imagen} alt="" />
      </div>
      <div className="text flex flex-col items-center justify-center">
        <h1 className="text-4xl"> 404 </h1>
        <h2 className="text-2xl">:( Pagina no econtrada</h2>
      </div>
    </div>
  );
};

export default PageNotFound;

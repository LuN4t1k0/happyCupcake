import React from "react";
import { Carousel } from "flowbite-react";
const Home = () => {
  return (
    <>
      <div className="bg-white dark:bg-gray-900 w-full h-[calc(100vh-128px)] justify-center ">
        <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">
            Conversemos !{" "}
          </h2>
          <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">
            Cuentanos en que te podemos ayudar.
          </p>
        </div>

        <div className="h-56 sm:h-64 xl:h-1/2 2xl:h-96 ">
          <Carousel>
            <img 
              src="https://wallpaperaccess.com/full/1986114.jpg"
              alt="..."
            />
            <img
              src="https://wallpaperaccess.com/full/4681352.jpg"
              alt="..."
            />
            <img
              src="https://wallpaperaccess.com/full/4681361.jpg"
              alt="..."
            />
            <img
              src="https://wallpaperaccess.com/full/4681357.jpg"
              alt="..."
            />
            <img
              src="https://wallpaperaccess.com/full/1986146.jpg"
              alt="..."
            />
          </Carousel>
        </div>
      </div>
    </>
  );
};

export default Home;

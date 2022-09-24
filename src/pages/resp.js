import React from "react";
import { Carousel } from "flowbite-react";
const Home = () => {
  return (
    <>
      <div className="bg-white dark:bg-gray-900 w-full h-[calc(100vh-128px)] justify-center pb-0 ">

        <div>
        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">
            Conversemos !{" "}
          </h2>
        </div>

        <div className="h-1/2 sm:h-1/2 xl:h-1/2 2xl:h-1/2 ">
          <Carousel>
            <img src="https://wallpaperaccess.com/full/1986114.jpg" alt="..." />
            <img src="https://wallpaperaccess.com/full/4681378.jpg" alt="..." />
            <img src="https://wallpaperaccess.com/full/4681361.jpg" alt="..." />
            <img src="https://wallpaperaccess.com/full/4681357.jpg" alt="..." />
            <img src="https://wallpaperaccess.com/full/1986146.jpg" alt="..." />
          </Carousel>
        </div>
      </div>
    </>
  );
};

export default Home;

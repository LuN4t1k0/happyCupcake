import React from "react";
import { Carousel } from "flowbite-react";
const Home = () => {
  return (
    <>
      <div className="bg-white dark:bg-gray-900  sm:h-[calc(100vh-128px)]     ">

          <Carousel>
            <img src="https://wallpaperaccess.com/full/1986114.jpg" alt="..." />
            <img src="https://wallpaperaccess.com/full/4681378.jpg" alt="..." />
            <img src="https://wallpaperaccess.com/full/4681361.jpg" alt="..." />
            <img src="https://wallpaperaccess.com/full/4681357.jpg" alt="..." />
            <img src="https://wallpaperaccess.com/full/1986146.jpg" alt="..." />
          </Carousel>
        </div>
   
    </>
  );
};

export default Home;

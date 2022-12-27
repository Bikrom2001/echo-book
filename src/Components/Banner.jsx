import React from "react";
import { Link } from "react-router-dom";
import "../CSS/Root.css";
import images from '../Images/people.png';

const Banner = () => {
  return (
    <section className="banner-bg">
      <div className="container more-banner-bg flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
        <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
          <h1 className="text-3xl font-bold text-white leading-none sm:text-4xl">
            Cirkle Community
          </h1>
          <p className="mt-5 mb-6 text-white text-lg sm:mb-10">
            Having real social contacts can sometimes be difficult FUN,
            everything becomes much simpler!
          </p>
          <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
            <Link
              to="/media"
              className="px-8 py-3 text-lg font-semibold border rounded dark:border-gray-100 text-white"
            >
              Discover Now
            </Link>
          </div>
        </div>
        <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
          <img
            src={images}
            alt=""
            className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128"
          />
        </div>
      </div>
    </section>
  );
};

export default Banner;

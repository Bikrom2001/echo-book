import React from 'react';

const Find = () => {
    return (
      <div className="flex flex-col overflow-hidden text-left shadow-sm lg:flex-row">
        <img
          src="https://images.pexels.com/photos/433452/pexels-photo-433452.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
          className="h-80 dark:bg-gray-500 aspect-video"
        />
        <div className="flex flex-col justify-center flex-1 p-6 banner-bg">
          <h3 className="text-3xl font-bold text-white">
            Cirkle Makes Your Life <br className="hidden lg:block" /> Easier &
            Simple
          </h3>
          <p className="my-6 dark:text-gray-200">
            Aliquam lorem ante dapibus in viverra quis feugiat atellu{" "}
            <br className="hidden lg:block" /> Peaselus vierra nullaut metus
            varius laoreet unknown printer took scrambled make.
          </p>
          <button
            type="button"
            className="self-start font-medium bg-white px-9 py-2 rounded-md"
          >
            Read More
          </button>
        </div>
      </div>
    );
};

export default Find;
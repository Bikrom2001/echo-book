import React from "react";
import { Link } from "react-router-dom";
import people from "../Images/people_2.png";

const Media = () => {

  return (
    <section>
      <div className="newsfeed-banner">
        <section className="">
          <div className="container flex flex-col justify-center  mx-auto lg:flex-row lg:justify-between">
            <div className="flex flex-col justify-center px-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
              <p className="text-white font-bold text-2xl mb-2">
                Members Newsfeed
              </p>
              <p className="text-white font-semibold text-lg">
                Check what your friends have been up to!
              </p>
            </div>
            <div className="flex hidden lg:block items-center justify-center lg:mt-0 h-72 sm:h-80 lg:h-80 xl:h-112 2xl:h-128">
              <img
                src={people}
                alt=""
                className="object-contain w-[725px] absolute right-16 bottom-0"
              />
            </div>
          </div>
        </section>
      </div>

      {/* all post */}
      <section class="bg-white">
        <div class="container px-6 py-10 mx-auto">
          <div class="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div className="bg-white text-black p-6 text-left meadia-shaow rounded-md">
              <div className="">
                <div className="flex items-center justify-between p-3">
                  <div className="flex items-center space-x-2">
                    <img
                      src="https://source.unsplash.com/50x50/?portrait"
                      alt=""
                      className="object-cover object-center w-9 h-9 rounded-full shadow-sm dark:bg-gray-500 dark:border-gray-700"
                    />
                    <div className="-space-y-1">
                      <h2 className="text-sm font-semibold leading-none">
                        Rebeca Powel
                      </h2>
                      <span className="inline-block text-xs leading-none dark:text-gray-400">
                        2 Years Ago
                      </span>
                    </div>
                  </div>
                  <button title="Open options" type="button">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                      className="w-5 h-5 fill-current"
                    >
                      <path d="M256,144a64,64,0,1,0-64-64A64.072,64.072,0,0,0,256,144Zm0-96a32,32,0,1,1-32,32A32.036,32.036,0,0,1,256,48Z"></path>
                      <path d="M256,368a64,64,0,1,0,64,64A64.072,64.072,0,0,0,256,368Zm0,96a32,32,0,1,1,32-32A32.036,32.036,0,0,1,256,464Z"></path>
                      <path d="M256,192a64,64,0,1,0,64,64A64.072,64.072,0,0,0,256,192Zm0,96a32,32,0,1,1,32-32A32.036,32.036,0,0,1,256,288Z"></path>
                    </svg>
                  </button>
                </div>
                <p className="text-sm dark:text-gray-400 mb-4">
                  This is a dream come true, thanks to all for the support!!!
                </p>
                <img
                  src="https://source.unsplash.com/301x301/?random"
                  alt=""
                  className="object-cover rounded-lg object-center w-full h-72 dark:bg-gray-500"
                />
                <div className="p-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <button
                        type="button"
                        title="Like post"
                        className="flex items-center justify-center"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 512 512"
                          className="w-5 h-5 fill-current"
                        >
                          <path d="M453.122,79.012a128,128,0,0,0-181.087.068l-15.511,15.7L241.142,79.114l-.1-.1a128,128,0,0,0-181.02,0l-6.91,6.91a128,128,0,0,0,0,181.019L235.485,449.314l20.595,21.578.491-.492.533.533L276.4,450.574,460.032,266.94a128.147,128.147,0,0,0,0-181.019ZM437.4,244.313,256.571,425.146,75.738,244.313a96,96,0,0,1,0-135.764l6.911-6.91a96,96,0,0,1,135.713-.051l38.093,38.787,38.274-38.736a96,96,0,0,1,135.765,0l6.91,6.909A96.11,96.11,0,0,1,437.4,244.313Z"></path>
                        </svg>
                      </button>
                      <button
                        type="button"
                        title="Add a comment"
                        className="flex items-center justify-center"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 512 512"
                          className="w-5 h-5 fill-current"
                        >
                          <path d="M496,496H480a273.39,273.39,0,0,1-179.025-66.782l-16.827-14.584C274.814,415.542,265.376,416,256,416c-63.527,0-123.385-20.431-168.548-57.529C41.375,320.623,16,270.025,16,216S41.375,111.377,87.452,73.529C132.615,36.431,192.473,16,256,16S379.385,36.431,424.548,73.529C470.625,111.377,496,161.975,496,216a171.161,171.161,0,0,1-21.077,82.151,201.505,201.505,0,0,1-47.065,57.537,285.22,285.22,0,0,0,63.455,97L496,457.373ZM294.456,381.222l27.477,23.814a241.379,241.379,0,0,0,135,57.86,317.5,317.5,0,0,1-62.617-105.583v0l-4.395-12.463,9.209-7.068C440.963,305.678,464,262.429,464,216c0-92.636-93.309-168-208-168S48,123.364,48,216s93.309,168,208,168a259.114,259.114,0,0,0,31.4-1.913Z"></path>
                        </svg>
                      </button>
                    </div>
                    <button
                      type="button"
                      title="Post Details"
                      className="flex items-center justify-center"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="w-5 h-5"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M7.5 7.5h-.75A2.25 2.25 0 004.5 9.75v7.5a2.25 2.25 0 002.25 2.25h7.5a2.25 2.25 0 002.25-2.25v-7.5a2.25 2.25 0 00-2.25-2.25h-.75m0-3l-3-3m0 0l-3 3m3-3v11.25m6-2.25h.75a2.25 2.25 0 012.25 2.25v7.5a2.25 2.25 0 01-2.25 2.25h-7.5a2.25 2.25 0 01-2.25-2.25v-.75"
                        />
                      </svg>
                    </button>
                  </div>
                  <hr className="mt-2" />

                  <div className="mt-4">
                    <div className="flex space-x-4">
                      <img
                        alt=""
                        src="https://source.unsplash.com/100x100/?portrait"
                        className="object-cover w-12 h-12 rounded-full shadow dark:bg-gray-500"
                      />
                      <div className="flex flex-col space-y-1">
                        <Link to="" className="text-sm font-semibold">
                          Leroy Jenkins
                        </Link>
                        <span className="text-xs dark:text-gray-400">
                          4 hours ago
                        </span>
                        <p className="font-semibold text-base text-gray-600">
                          Why You not be should.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3 mt-5">
                    <input
                      type="text"
                      placeholder="Add a comment..."
                      className="w-full py-0.5 dark:bg-transparent border-none rounded focus:border-none text-sm pl-0 dark:text-gray-500"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white text-black p-6 text-left meadia-shaow rounded-md">
              <div className="">
                <div className="flex items-center justify-between p-3">
                  <div className="flex items-center space-x-2">
                    <img
                      src="https://source.unsplash.com/50x50/?portrait"
                      alt=""
                      className="object-cover object-center w-9 h-9 rounded-full shadow-sm dark:bg-gray-500 dark:border-gray-700"
                    />
                    <div className="-space-y-1">
                      <h2 className="text-sm font-semibold leading-none">
                        Rebeca Powel
                      </h2>
                      <span className="inline-block text-xs leading-none dark:text-gray-400">
                        2 Years Ago
                      </span>
                    </div>
                  </div>
                  <button title="Open options" type="button">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                      className="w-5 h-5 fill-current"
                    >
                      <path d="M256,144a64,64,0,1,0-64-64A64.072,64.072,0,0,0,256,144Zm0-96a32,32,0,1,1-32,32A32.036,32.036,0,0,1,256,48Z"></path>
                      <path d="M256,368a64,64,0,1,0,64,64A64.072,64.072,0,0,0,256,368Zm0,96a32,32,0,1,1,32-32A32.036,32.036,0,0,1,256,464Z"></path>
                      <path d="M256,192a64,64,0,1,0,64,64A64.072,64.072,0,0,0,256,192Zm0,96a32,32,0,1,1,32-32A32.036,32.036,0,0,1,256,288Z"></path>
                    </svg>
                  </button>
                </div>
                <p className="text-sm dark:text-gray-400 mb-4">
                  This is a dream come true, thanks to all for the support!!!
                </p>
                <img
                  src="https://source.unsplash.com/301x301/?random"
                  alt=""
                  className="object-cover rounded-lg object-center w-full h-72 dark:bg-gray-500"
                />
                <div className="p-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <button
                        type="button"
                        title="Like post"
                        className="flex items-center justify-center"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 512 512"
                          className="w-5 h-5 fill-current"
                        >
                          <path d="M453.122,79.012a128,128,0,0,0-181.087.068l-15.511,15.7L241.142,79.114l-.1-.1a128,128,0,0,0-181.02,0l-6.91,6.91a128,128,0,0,0,0,181.019L235.485,449.314l20.595,21.578.491-.492.533.533L276.4,450.574,460.032,266.94a128.147,128.147,0,0,0,0-181.019ZM437.4,244.313,256.571,425.146,75.738,244.313a96,96,0,0,1,0-135.764l6.911-6.91a96,96,0,0,1,135.713-.051l38.093,38.787,38.274-38.736a96,96,0,0,1,135.765,0l6.91,6.909A96.11,96.11,0,0,1,437.4,244.313Z"></path>
                        </svg>
                      </button>
                      <button
                        type="button"
                        title="Add a comment"
                        className="flex items-center justify-center"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 512 512"
                          className="w-5 h-5 fill-current"
                        >
                          <path d="M496,496H480a273.39,273.39,0,0,1-179.025-66.782l-16.827-14.584C274.814,415.542,265.376,416,256,416c-63.527,0-123.385-20.431-168.548-57.529C41.375,320.623,16,270.025,16,216S41.375,111.377,87.452,73.529C132.615,36.431,192.473,16,256,16S379.385,36.431,424.548,73.529C470.625,111.377,496,161.975,496,216a171.161,171.161,0,0,1-21.077,82.151,201.505,201.505,0,0,1-47.065,57.537,285.22,285.22,0,0,0,63.455,97L496,457.373ZM294.456,381.222l27.477,23.814a241.379,241.379,0,0,0,135,57.86,317.5,317.5,0,0,1-62.617-105.583v0l-4.395-12.463,9.209-7.068C440.963,305.678,464,262.429,464,216c0-92.636-93.309-168-208-168S48,123.364,48,216s93.309,168,208,168a259.114,259.114,0,0,0,31.4-1.913Z"></path>
                        </svg>
                      </button>
                    </div>
                    <button
                      type="button"
                      title="Post Details"
                      className="flex items-center justify-center"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="w-5 h-5"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M7.5 7.5h-.75A2.25 2.25 0 004.5 9.75v7.5a2.25 2.25 0 002.25 2.25h7.5a2.25 2.25 0 002.25-2.25v-7.5a2.25 2.25 0 00-2.25-2.25h-.75m0-3l-3-3m0 0l-3 3m3-3v11.25m6-2.25h.75a2.25 2.25 0 012.25 2.25v7.5a2.25 2.25 0 01-2.25 2.25h-7.5a2.25 2.25 0 01-2.25-2.25v-.75"
                        />
                      </svg>
                    </button>
                  </div>
                  <hr className="mt-2" />

                  <div className="mt-4">
                    <div className="flex space-x-4">
                      <img
                        alt=""
                        src="https://source.unsplash.com/100x100/?portrait"
                        className="object-cover w-12 h-12 rounded-full shadow dark:bg-gray-500"
                      />
                      <div className="flex flex-col space-y-1">
                        <Link to="" className="text-sm font-semibold">
                          Leroy Jenkins
                        </Link>
                        <span className="text-xs dark:text-gray-400">
                          4 hours ago
                        </span>
                        <p className="font-semibold text-base text-gray-600">
                          Why You not be should.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3 mt-5">
                    <input
                      type="text"
                      placeholder="Add a comment..."
                      className="w-full py-0.5 dark:bg-transparent border-none rounded focus:border-none text-sm pl-0 dark:text-gray-500"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white text-black p-6 text-left meadia-shaow rounded-md">
              <div className="">
                <div className="flex items-center justify-between p-3">
                  <div className="flex items-center space-x-2">
                    <img
                      src="https://source.unsplash.com/50x50/?portrait"
                      alt=""
                      className="object-cover object-center w-9 h-9 rounded-full shadow-sm dark:bg-gray-500 dark:border-gray-700"
                    />
                    <div className="-space-y-1">
                      <h2 className="text-sm font-semibold leading-none">
                        Rebeca Powel
                      </h2>
                      <span className="inline-block text-xs leading-none dark:text-gray-400">
                        2 Years Ago
                      </span>
                    </div>
                  </div>
                  <button title="Open options" type="button">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                      className="w-5 h-5 fill-current"
                    >
                      <path d="M256,144a64,64,0,1,0-64-64A64.072,64.072,0,0,0,256,144Zm0-96a32,32,0,1,1-32,32A32.036,32.036,0,0,1,256,48Z"></path>
                      <path d="M256,368a64,64,0,1,0,64,64A64.072,64.072,0,0,0,256,368Zm0,96a32,32,0,1,1,32-32A32.036,32.036,0,0,1,256,464Z"></path>
                      <path d="M256,192a64,64,0,1,0,64,64A64.072,64.072,0,0,0,256,192Zm0,96a32,32,0,1,1,32-32A32.036,32.036,0,0,1,256,288Z"></path>
                    </svg>
                  </button>
                </div>
                <p className="text-sm dark:text-gray-400 mb-4">
                  This is a dream come true, thanks to all for the support!!!
                </p>
                <img
                  src="https://source.unsplash.com/301x301/?random"
                  alt=""
                  className="object-cover rounded-lg object-center w-full h-72 dark:bg-gray-500"
                />
                <div className="p-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <button
                        type="button"
                        title="Like post"
                        className="flex items-center justify-center"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 512 512"
                          className="w-5 h-5 fill-current"
                        >
                          <path d="M453.122,79.012a128,128,0,0,0-181.087.068l-15.511,15.7L241.142,79.114l-.1-.1a128,128,0,0,0-181.02,0l-6.91,6.91a128,128,0,0,0,0,181.019L235.485,449.314l20.595,21.578.491-.492.533.533L276.4,450.574,460.032,266.94a128.147,128.147,0,0,0,0-181.019ZM437.4,244.313,256.571,425.146,75.738,244.313a96,96,0,0,1,0-135.764l6.911-6.91a96,96,0,0,1,135.713-.051l38.093,38.787,38.274-38.736a96,96,0,0,1,135.765,0l6.91,6.909A96.11,96.11,0,0,1,437.4,244.313Z"></path>
                        </svg>
                      </button>
                      <button
                        type="button"
                        title="Add a comment"
                        className="flex items-center justify-center"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 512 512"
                          className="w-5 h-5 fill-current"
                        >
                          <path d="M496,496H480a273.39,273.39,0,0,1-179.025-66.782l-16.827-14.584C274.814,415.542,265.376,416,256,416c-63.527,0-123.385-20.431-168.548-57.529C41.375,320.623,16,270.025,16,216S41.375,111.377,87.452,73.529C132.615,36.431,192.473,16,256,16S379.385,36.431,424.548,73.529C470.625,111.377,496,161.975,496,216a171.161,171.161,0,0,1-21.077,82.151,201.505,201.505,0,0,1-47.065,57.537,285.22,285.22,0,0,0,63.455,97L496,457.373ZM294.456,381.222l27.477,23.814a241.379,241.379,0,0,0,135,57.86,317.5,317.5,0,0,1-62.617-105.583v0l-4.395-12.463,9.209-7.068C440.963,305.678,464,262.429,464,216c0-92.636-93.309-168-208-168S48,123.364,48,216s93.309,168,208,168a259.114,259.114,0,0,0,31.4-1.913Z"></path>
                        </svg>
                      </button>
                    </div>
                    <button
                      type="button"
                      title="Post Details"
                      className="flex items-center justify-center"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="w-5 h-5"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M7.5 7.5h-.75A2.25 2.25 0 004.5 9.75v7.5a2.25 2.25 0 002.25 2.25h7.5a2.25 2.25 0 002.25-2.25v-7.5a2.25 2.25 0 00-2.25-2.25h-.75m0-3l-3-3m0 0l-3 3m3-3v11.25m6-2.25h.75a2.25 2.25 0 012.25 2.25v7.5a2.25 2.25 0 01-2.25 2.25h-7.5a2.25 2.25 0 01-2.25-2.25v-.75"
                        />
                      </svg>
                    </button>
                  </div>
                  <hr className="mt-2" />

                  <div className="mt-4">
                    <div className="flex space-x-4">
                      <img
                        alt=""
                        src="https://source.unsplash.com/100x100/?portrait"
                        className="object-cover w-12 h-12 rounded-full shadow dark:bg-gray-500"
                      />
                      <div className="flex flex-col space-y-1">
                        <Link to="" className="text-sm font-semibold">
                          Leroy Jenkins
                        </Link>
                        <span className="text-xs dark:text-gray-400">
                          4 hours ago
                        </span>
                        <p className="font-semibold text-base text-gray-600">
                          Why You not be should.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3 mt-5">
                    <input
                      type="text"
                      placeholder="Add a comment..."
                      className="w-full py-0.5 dark:bg-transparent border-none rounded focus:border-none text-sm pl-0 dark:text-gray-500"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Media;

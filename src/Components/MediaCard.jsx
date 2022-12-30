import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Context/UserContext";

const MediaCard = ({ mediapost }) => {
  const { description, image, _id } = mediapost;

  const { show, setShow } = useState(false);

  const { user } = useContext(AuthContext);

  console.log(show);
  return (
    <div>
      <div className="bg-white text-black p-6 text-left meadia-shaow rounded-md">
        <div className="">
          <div className="flex items-center justify-between p-3">
            <div className="flex items-center space-x-2">
              <img
                src={user?.photoURL}
                alt=""
                className="object-cover object-center w-9 h-9 rounded-full shadow-sm dark:bg-gray-500 dark:border-gray-700"
              />
              <div className="-space-y-1">
                <h2 className="text-sm font-semibold leading-none">
                  {user?.displayName}
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
          <p className="text-sm dark:text-gray-400 mb-4">{description}</p>
          <img
            src={image}
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
                  <label className="swap swap-rotate">
                    <input type="checkbox" />
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor text-blue-600"
                      class="w-6 h-6 swap-on"
                    >
                      <path d="M7.493 18.75c-.425 0-.82-.236-.975-.632A7.48 7.48 0 016 15.375c0-1.75.599-3.358 1.602-4.634.151-.192.373-.309.6-.397.473-.183.89-.514 1.212-.924a9.042 9.042 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75 2.25 2.25 0 012.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H14.23c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23h-.777zM2.331 10.977a11.969 11.969 0 00-.831 4.398 12 12 0 00.52 3.507c.26.85 1.084 1.368 1.973 1.368H4.9c.445 0 .72-.498.523-.898a8.963 8.963 0 01-.924-3.977c0-1.708.476-3.305 1.302-4.666.245-.403-.028-.959-.5-.959H4.25c-.832 0-1.612.453-1.918 1.227z" />
                    </svg>

                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="w-6 h-6 swap-off text-blue-600 "
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M6.633 10.5c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75A2.25 2.25 0 0116.5 4.5c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23H5.904M14.25 9h2.25M5.904 18.75c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 01-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 10.203 4.167 9.75 5 9.75h1.053c.472 0 .745.556.5.96a8.958 8.958 0 00-1.302 4.665c0 1.194.232 2.333.654 3.375z"
                      />
                    </svg>
                  </label>
                  <span className="pl-2 text-blue-600 font-bold">Like</span>
                </button>

                <button
                  onClick={() => setShow(!show)}
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
                  <span className="pl-2 text-black font-bold">Comment</span>
                </button>
              </div>

              {user?.email ? (
                <Link to={`/mediaDetails/${_id}`}>
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
                      className="w-5 h-5"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M7.5 7.5h-.75A2.25 2.25 0 004.5 9.75v7.5a2.25 2.25 0 002.25 2.25h7.5a2.25 2.25 0 002.25-2.25v-7.5a2.25 2.25 0 00-2.25-2.25h-.75m0-3l-3-3m0 0l-3 3m3-3v11.25m6-2.25h.75a2.25 2.25 0 012.25 2.25v7.5a2.25 2.25 0 01-2.25 2.25h-7.5a2.25 2.25 0 01-2.25-2.25v-.75"
                      />
                    </svg>
                    <span className="pl-2 text-black font-bold">Details</span>
                  </button>
                </Link>
              ) : (
                <Link to="/login">
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
                      className="w-5 h-5"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M7.5 7.5h-.75A2.25 2.25 0 004.5 9.75v7.5a2.25 2.25 0 002.25 2.25h7.5a2.25 2.25 0 002.25-2.25v-7.5a2.25 2.25 0 00-2.25-2.25h-.75m0-3l-3-3m0 0l-3 3m3-3v11.25m6-2.25h.75a2.25 2.25 0 012.25 2.25v7.5a2.25 2.25 0 01-2.25 2.25h-7.5a2.25 2.25 0 01-2.25-2.25v-.75"
                      />
                    </svg>
                    <span className="pl-2 text-black font-bold">Details</span>
                  </button>
                </Link>
              )}
            </div>
            <hr className="mt-2" />

            <div className="mt-4">
              <div className="flex space-x-4">
                <img
                  alt=""
                  src={user?.photoURL}
                  className="object-cover w-12 h-12 rounded-full shadow dark:bg-gray-500"
                />
                <div className="flex flex-col space-y-1">
                  <Link to="" className="text-sm font-semibold">
                    {user?.displayName}
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
  );
};

export default MediaCard;

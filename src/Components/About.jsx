import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Context/UserContext";

const About = () => {

  const {user} = useContext(AuthContext);

  return (
    <div className="bg-[#EFF4FB]">
      <div className="banner-user">
        <div className="container p-6">
          <div>
            <div className="max-w-md p-8 sm:flex sm:space-x-6">
              <div className="flex-shrink-0 w-full mb-6 h-48 sm:h-32 sm:w-32 sm:mb-0">
                <img
                  src={user?.photoURL}
                  alt=""
                  className="object-cover object-center w-full h-full rounded-full dark:bg-gray-500"
                />
              </div>
              <div className="flex flex-col space-y-4">
                <div className="text-left">
                  <h2 className="text-2xl font-bold text-white">
                    {user?.displayName}
                  </h2>
                  <span className="text-sm dark:text-gray-200">
                    United State of America
                  </span>
                </div>
                <div className="space-y-1">
                  <div className="flex justify-center pt-4 space-x-4 lg:pt-0 lg:col-end-13">
                    <Link
                      to=""
                      title="Email"
                      className="flex items-center justify-center w-10 h-10 rounded-full bg-[#6EC1E4]  dark:text-white"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="w-5 h-5"
                      >
                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                      </svg>
                    </Link>
                    <Link
                      to=""
                      title="Twitter"
                      className="flex items-center  justify-center w-10 h-10 rounded-full bg-[#6EC1E4]  dark:text-white"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 50 50"
                        fill="currentColor"
                        className="w-5 h-5"
                      >
                        <path d="M 50.0625 10.4375 C 48.214844 11.257813 46.234375 11.808594 44.152344 12.058594 C 46.277344 10.785156 47.910156 8.769531 48.675781 6.371094 C 46.691406 7.546875 44.484375 8.402344 42.144531 8.863281 C 40.269531 6.863281 37.597656 5.617188 34.640625 5.617188 C 28.960938 5.617188 24.355469 10.21875 24.355469 15.898438 C 24.355469 16.703125 24.449219 17.488281 24.625 18.242188 C 16.078125 17.8125 8.503906 13.71875 3.429688 7.496094 C 2.542969 9.019531 2.039063 10.785156 2.039063 12.667969 C 2.039063 16.234375 3.851563 19.382813 6.613281 21.230469 C 4.925781 21.175781 3.339844 20.710938 1.953125 19.941406 C 1.953125 19.984375 1.953125 20.027344 1.953125 20.070313 C 1.953125 25.054688 5.5 29.207031 10.199219 30.15625 C 9.339844 30.390625 8.429688 30.515625 7.492188 30.515625 C 6.828125 30.515625 6.183594 30.453125 5.554688 30.328125 C 6.867188 34.410156 10.664063 37.390625 15.160156 37.472656 C 11.644531 40.230469 7.210938 41.871094 2.390625 41.871094 C 1.558594 41.871094 0.742188 41.824219 -0.0585938 41.726563 C 4.488281 44.648438 9.894531 46.347656 15.703125 46.347656 C 34.617188 46.347656 44.960938 30.679688 44.960938 17.09375 C 44.960938 16.648438 44.949219 16.199219 44.933594 15.761719 C 46.941406 14.3125 48.683594 12.5 50.0625 10.4375 Z"></path>
                      </svg>
                    </Link>
                    <Link
                      to=""
                      title="GitHub"
                      className="flex items-center justify-center w-10 h-10 rounded-full bg-[#6EC1E4]  dark:text-white"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        className="w-5 h-5"
                      >
                        <path d="M10.9,2.1c-4.6,0.5-8.3,4.2-8.8,8.7c-0.5,4.7,2.2,8.9,6.3,10.5C8.7,21.4,9,21.2,9,20.8v-1.6c0,0-0.4,0.1-0.9,0.1 c-1.4,0-2-1.2-2.1-1.9c-0.1-0.4-0.3-0.7-0.6-1C5.1,16.3,5,16.3,5,16.2C5,16,5.3,16,5.4,16c0.6,0,1.1,0.7,1.3,1c0.5,0.8,1.1,1,1.4,1 c0.4,0,0.7-0.1,0.9-0.2c0.1-0.7,0.4-1.4,1-1.8c-2.3-0.5-4-1.8-4-4c0-1.1,0.5-2.2,1.2-3C7.1,8.8,7,8.3,7,7.6C7,7.2,7,6.6,7.3,6 c0,0,1.4,0,2.8,1.3C10.6,7.1,11.3,7,12,7s1.4,0.1,2,0.3C15.3,6,16.8,6,16.8,6C17,6.6,17,7.2,17,7.6c0,0.8-0.1,1.2-0.2,1.4 c0.7,0.8,1.2,1.8,1.2,3c0,2.2-1.7,3.5-4,4c0.6,0.5,1,1.4,1,2.3v2.6c0,0.3,0.3,0.6,0.7,0.5c3.7-1.5,6.3-5.1,6.3-9.3 C22,6.1,16.9,1.4,10.9,2.1z"></path>
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* About details */}

      <section class="bg-white">
        <div class="container px-6 py-10 mx-auto">
          <div class="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div className="bg-white p-6 text-left shadow-lg rounded-md">
              <div className="flex items-center justify-between">
                <h1 className="font-bold text-2xl">Contact Info</h1>
                <span>
                  <Link to="">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="w-6 h-6 cursor-pointer"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                      />
                    </svg>
                  </Link>
                </span>
              </div>
              <div className="flex items-center mt-7 mb-2 justify-between">
                <h2 className="font-bold text-xl">Name :</h2>
                <p className="font-semibold text-gray-400">
                  {user?.displayName}
                </p>
              </div>
              <hr />
              <div className="flex items-center mt-5 mb-2 justify-between">
                <h2 className="font-bold text-xl">Email :</h2>
                <p className="font-semibold text-gray-400">{user?.email}</p>
              </div>
              <hr />

              <div className="flex items-center mt-5 mb-2 justify-between">
                <h2 className="font-bold text-xl">Address :</h2>
                <p className="font-semibold text-gray-400">
                  59 Street, Newyorkc City
                </p>
              </div>
              <hr />
              <div className="flex items-center mt-5 mb-2 justify-between">
                <h2 className="font-bold text-xl">University :</h2>
                <p className="font-semibold text-gray-400">
                  university of alberta
                </p>
              </div>
            </div>
            <div className="bg-white p-6 text-left shadow-lg rounded-md">
              <div className="flex items-center justify-between">
                <h1 className="font-bold text-2xl">Hobbies and Interests</h1>
                <span>
                  <Link to="">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="w-6 h-6 cursor-pointer"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                      />
                    </svg>
                  </Link>
                </span>
              </div>
              <div className="flex items-center mt-7 mb-2 justify-between">
                <h2 className="font-bold text-xl">My Hobbies :</h2>
                <p className="font-semibold text-gray-400">
                  When an unknown printer took a galley
                </p>
              </div>
              <hr />
              <div className="flex items-center mt-5 mb-2 justify-between">
                <h2 className="font-bold text-xl">
                  Favorite Music Bands/Artists :
                </h2>
                <p className="font-semibold text-gray-400">
                  Iron Maid, DC/AC, Megablow,
                </p>
              </div>
              <hr />

              <div className="flex items-center mt-5 mb-2 justify-between">
                <h2 className="font-bold text-xl">Favorite Movies :</h2>
                <p className="font-semibold text-gray-400">
                  Idiocratic, Ferrum Man.
                </p>
              </div>
              <hr />
              <div className="flex items-center mt-5 mb-2 justify-between">
                <h2 className="font-bold text-xl">Other Activities :</h2>
                <p className="font-semibold text-gray-400">
                  Swimming, Surfing, Scuba Diving,
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;

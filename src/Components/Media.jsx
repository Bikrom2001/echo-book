import React, { useEffect, useState } from "react";
import people from "../Images/people_2.png";
import MediaCard from "./MediaCard";

const Media = () => {

  const [mediaposts, setmediaposts] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/post`)
      .then((res) => res.json())
      .then((data) => setmediaposts(data));
  }, []);


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
            {mediaposts.map((mediapost) => (
              <MediaCard key={mediapost._id} mediapost={mediapost}></MediaCard>
            ))}
          </div>
        </div>
      </section>
    </section>
  );
};

export default Media;

import React from 'react';

const Gallery = () => {
    return (
      <div>
        <section className="py-8 dark:text-gray-50">
          <h2 className="text-black text-3xl mb-3 font-bold">
            Find People Near You
          </h2>
          <p className="text-gray-400 mb-4">
            When an unknown printer took a galley of type and meeting fari{" "}
            <br className="hidden lg:block" />
            scrambled it to make a type of specific specimen book.
          </p>
          <div className="container grid grid-cols-2 gap-4 p-4 mx-auto md:grid-cols-4">
            <img
              src="https://images.pexels.com/photos/2525903/pexels-photo-2525903.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
              className="w-full h-full col-span-2 row-span-2 rounded shadow-sm min-h-96 md:col-start-3 md:row-start-1 dark:bg-gray-500 aspect-square"
            />

            <img
              alt=""
              className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
              src="https://images.pexels.com/photos/10140032/pexels-photo-10140032.jpeg?auto=compress&cs=tinysrgb&w=600"
            />
            <img
              alt=""
              className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
              src="https://images.pexels.com/photos/1519088/pexels-photo-1519088.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            />
            <img
              alt=""
              className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
              src="https://images.pexels.com/photos/951539/pexels-photo-951539.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            />
            <img
              alt=""
              className="w-full h-full hover: rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
              src="https://images.pexels.com/photos/1518500/pexels-photo-1518500.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            />
          </div>
        </section>
        <hr />
      </div>
    );
};

export default Gallery;
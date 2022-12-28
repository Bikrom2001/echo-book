import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const Post = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const imgHostingKey = process.env.REACT_APP_imgbb_key;

  const handleAddPost = (data) => {
    const image = data.image[0];
    const formData = new FormData();
    formData.append("image", image);
    const url = `https://api.imgbb.com/1/upload?key=${imgHostingKey}`;
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imgData) => {
        console.log(imgData);
        if (imgData.success) {
          console.log(imgData.data.url);
          const postData = {
            description: data.description,
            image: imgData.data.url,
          };
          fetch(`http://localhost:5000/post`, {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(postData),
          })
            .then((res) => res.json())
            .then((result) => {
              console.log(result);
              toast.success(`Post added successfully`);
            });
        }
      });
  };

  return (
    <section class="bg-white text-left">
      <hr />
      <div class="container px-6 py-8 mx-auto lg:py-8">
        <div class="lg:flex items-center">
          <div class="lg:w-1/2">
            <h1 class="text-black md:text-lg">Create Post</h1>

            <h1 class="mt-4 text-3xl font-medium text-black capitalize md:text-4xl lg:text-5xl">
              Create Post
            </h1>
          </div>

          <div class="mt-8 lg:w-1/2 lg:mt-0 bg-white p-6 rounded-md shadow-lg">
            <h2 className="font-bold mb-2 pl-1"> Create Post</h2>
            <form
              onSubmit={handleSubmit(handleAddPost)}
              class="w-full lg:max-w-xl"
            >
              <div class="relative flex items-start">
                <span class="absolute top-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-5 h-5 mx-3 text-gray-300 dark:text-gray-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                </span>

                <textarea
                  type="email"
                  {...register("description")}
                  class="block w-full py-3 text-gray-700 bg-white border rounded-lg px-11  dark:text-gray-400 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                  placeholder="What's on your mind?"
                />
                {errors.description && (
                  <p className="text-orange-400">
                    {errors.description?.message}
                  </p>
                )}
              </div>

              <div class=" mt-4">
                <label
                  for="dropzone-file"
                  class="flex items-center px-3 py-3 mx-auto mt-6 text-center bg-white border-2 border rounded-lg cursor-pointer dark:border-gray-600"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-6 h-6 text-gray-300 dark:text-gray-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"
                    />
                  </svg>

                  <h2 class="mx-3 text-gray-400">Profile Photo</h2>

                  <input
                    id="dropzone-file"
                    {...register("image", { required: "Image is required" })}
                    type="file"
                    class="hidden"
                  />
                  {errors.img && <p role="alert">{errors.img?.message}</p>}
                </label>
              </div>
              <div class="mt-8 md:flex md:items-center">
                <button class="w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-lg md:w-1/2 hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                  Post
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Post;

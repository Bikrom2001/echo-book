import { fromJSON } from "postcss";
import React, { useContext, useState } from "react";
import { toast } from "react-toastify";
import { AuthContext } from "../Context/UserContext";

const AboutModal = ({ aboutinfo }) => {
  const { address, university } = aboutinfo;
  const [reviews, setReview] = useState(aboutinfo);

  const { user } = useContext(AuthContext);

  const updateAbout = () => {

     fetch(`http://localhost:5000/updateAboute/${aboutinfo._id}`, {
       method: "PATCH",
       headers: {
         "content-type": "application/json",
       },
       body: JSON.stringify(reviews),
     })
       .then((res) => res.json())
       .then((data) => {
         console.log(data);
         if (data.modifiedCount > 0) {
           toast.success("Updated Seccess");
         }
       });
  };

  const handlerInputChange = (e) => {
    e.preventDefault();
    const value = e.target.value;
    const field = e.target.name;
    const newUser = { ...reviews };
    newUser[field] = value;
    setReview(newUser);
  };

  return (
    <div>
      <input type="checkbox" id="my-modal-3" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="my-modal-3"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold">
            Congratulations Edit Contact Info
          </h3>
          <div className="mt-4">
            <form onSubmit={updateAbout} className="space-y-6">
              <div className="space-y-1 text-sm">
                <input
                  type="text"
                  name="date"
                  id="date"
                  disabled
                  value={user?.displayName}
                  className="w-full text-base px-4 py-3 rounded-md border border-black dark:text-black focus:dark:border-violet-400"
                />
              </div>
              <div className="space-y-1 text-sm">
                <input
                  type="text"
                  name="date"
                  id="date"
                  disabled
                  value={user?.email}
                  className="w-full text-base px-4 py-3 rounded-md border border-black dark:text-black focus:dark:border-violet-400"
                />
              </div>
              <div className="space-y-1 text-sm">
                <input
                  onChange={handlerInputChange}
                  type="text"
                  name="address"
                  id="Address"
                  placeholder="Address"
                  defaultValue={address}
                  className="w-full px-4 py-3 rounded-md border border-black dark:text-black focus:dark:border-violet-400"
                />
              </div>
              <div className="space-y-1 text-sm">
                <input
                  onChange={handlerInputChange}
                  type="text"
                  name="university"
                  id="university"
                  placeholder="University"
                  defaultValue={university}
                  className="w-full px-4 py-3 rounded-md border border-black dark:text-black focus:dark:border-violet-400"
                />
              </div>
              <button
                type="submit"
                className="block w-full p-3 text-center rounded-sm text-white bg-gradient-to-r from-primary to-secondary"
              >
                UPDATE
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutModal;

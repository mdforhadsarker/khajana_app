import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "../axiosinstance";

function Create() {
  const [values, setValues] = useState({
    name: "",
    namebn: "",
    snumber: "",
    status: "Active",
  });
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post(`/`, values)
      .then((res) => {
        console.log(res);
        navigate("/");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="w-full md:w-auto justify-between items-center px-6 py-6 lg:px-8 bg-slate-200 rounded-lg shadow ">
      <h3 className="mb-4 text-xl font-medium text-gray-900 dark:text-white">
        Add Product Type
      </h3>
      <form onSubmit={handleSubmit} className="space-y-6 w-96">
        <div>
          <label
            htmlFor="name"
            className="text-left block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Product Type Name: *
          </label>
          <input
            type="text"
            name="name"
            className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
            onChange={(e) =>
              setValues({
                ...values,
                name: e.target.value,
              })
            }
            placeholder=" "
            required
          />
        </div>
        <div>
          <label
            htmlFor="namebn"
            className=" text-left block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Product Type Name BN: *
          </label>
          <input
            type="text"
            name="namebn"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
            onChange={(e) =>
              setValues({
                ...values,
                namebn: e.target.value,
              })
            }
            placeholder=" "
            required
          />
        </div>
        <div>
          <label
            htmlFor="snumber"
            className="text-left block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Sequence Number: *
          </label>
          <input
            type="number"
            name="snumber"
            step="0.01"
            onChange={(e) =>
              setValues({
                ...values,
                snumber: e.target.value,
              })
            }
            placeholder=""
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
            required
          />
        </div>

        <div className="flex justify-between">
          <Link to="/">
            <button className="space-x-4 inline-flex items-center justify-center px-4 py-2 text-base font-medium leading-6 text-white whitespace-no-wrap bg-blue-600 border border-blue-700 rounded-md shadow-sm hover:bg-blue-700 focus:outline-none ">
              Back
            </button>
          </Link>
          <button
            type="submit"
            className="space-x-4 inline-flex items-center justify-center px-4 py-2 text-base font-medium leading-6 text-white whitespace-no-wrap bg-blue-600 border border-blue-700 rounded-md shadow-sm hover:bg-blue-700 focus:outline-none"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default Create;

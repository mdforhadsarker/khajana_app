import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function View() {
  const [data, setData] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    axios
      .get("http://localhost:3000/products/" + id)
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="max-w-7xl mx-auto flex justify-between items-center p-4">
      <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
        <div className=" px-6 py-6 lg:px-8">
          <h3 className="mb-4 text-xl font-medium text-gray-900 dark:text-white">
            View Product Type
          </h3>

          <div>
            <label
              htmlFor="id"
              className="text-left block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Product Type Id: *
            </label>
            <strong className="text-left bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white">
              {data.id}
            </strong>
          </div>
          <div>
            <label
              htmlFor="name"
              className="text-left block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Product Type Name: *
            </label>
            <strong className="text-left bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white">
              {data.name}
            </strong>
          </div>
          <div>
            <label
              htmlFor="namebn"
              className=" text-left block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Product Type Name BN: *
            </label>
            <strong className="text-left bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white">
              {data.namebn}
            </strong>
          </div>
          <div>
            <label
              htmlFor="snumber"
              className="text-left block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Sequence Number: *
            </label>
            <strong className="text-left bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white">
              {data.snumber}
            </strong>
          </div>

          <div className="flex justify-between">
            <Link to="/">
              <button className="space-x-4 inline-flex items-center justify-center px-4 py-2 text-base font-medium leading-6 text-white whitespace-no-wrap bg-blue-600 border border-blue-700 rounded-md shadow-sm hover:bg-blue-700 focus:outline-none ">
                Back
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default View;

import { useParams } from "react-router-dom";
import axios from '../axiosinstance';
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Edit() {
  // const [data, setData] = useState([]);
  const { id } = useParams();
  const navigate = useNavigate();

  const [values, setValues] = useState({
    
    name: " ",
    namebn: " ",
    snumber: '',
    status: "Active",
  });

  useEffect(() => {
    axios
      .get(`/`+ id)
      .then((res) => {
        setValues(res.data);
      })
      .catch((err) => console.log(err));
  },[id]);

  const handleUpdate = (event) => {
    event.preventDefault();
    axios
      .put(`/`+id, values)
      .then((res) => {
        console.log(res);
        navigate("/");
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="w-full md:w-auto justify-between items-center px-6 py-6 lg:px-8 bg-slate-200 rounded-lg shadow ">
      <h3 className="text-center mb-4 text-xl font-medium text-gray-900 dark:text-white">
        Edit Product Type
      </h3>
      <form onSubmit={handleUpdate} className="space-y-6 w-96">
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
            value={values.name}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
            onChange={(e) =>
              setValues({
                ...values,
                name: e.target.value,
              })
            }
            
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
            value={values.namebn}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
            onChange={(e) =>
              setValues({
                ...values,
                namebn: e.target.value,
              })
            }
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
            value={values.snumber}
            step="0.01"
            onChange={(e) =>
              setValues({
                ...values,
                snumber: e.target.value,
              })
            }
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
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
            Update
          </button>
        </div>
      </form>
    </div>
  );
}

export default Edit;

import { useEffect, useState } from "react";
import TopNav from "./TopNav";
import { AiOutlineEdit, AiFillEye } from "react-icons/ai";
import { AiOutlinePlus } from "react-icons/ai";
import { Link } from "react-router-dom";
import axios from '../axiosinstance';

function Home() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get(`/`)
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className=" max-w-7xl mx-auto items-center p-4 ">
      <TopNav />
      <div className="flex justify-start py-8">
        <Link to="/create">
          <button
            onClick={() => {
              console.log("Clicked");
            }}
            className="space-x-4 inline-flex items-center justify-center px-4 py-2 text-base font-medium leading-6 text-white whitespace-no-wrap bg-blue-600 border border-blue-700 rounded-md shadow-sm hover:bg-blue-700 focus:outline-none "
          >
            <AiOutlinePlus className="space-x-4 " />
            Add New
          </button>
        </Link>
      </div>

      <div className=" max-w-7xl mx-auto flex relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-200 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Product Type Id
              </th>
              <th scope="col" className="px-6 py-3">
                Product Type Name
              </th>
              <th scope="col" className="px-6 py-3">
                Product Type Name BN
              </th>
              <th scope="col" className="px-6 py-3">
                Sequence Number
              </th>
              <th scope="col" className="px-6 py-3">
                Status
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map((d, i) => (
              <tr
                key={i}
                className="bg-white border-b dark:bg-gray-900 dark:border-gray-700"
              >
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {d.id}
                </th>
                <td className="px-6 py-4"> {d.name}</td>
                <td className="px-6 py-4">{d.namebn}</td>
                <td className="px-6 py-4">{d.snumber}</td>
                <td className="px-6 py-4">{d.status}</td>
                <td className="flex items-center px-6 py-4 space-x-3 	">
                  <Link to={`/view/${d.id}`}>
                    <button
                      onClick={() => console.log("View")}
                      className="border-none focus:outline-none"
                    >
                      {" "}
                      <AiFillEye size={20} />
                    </button>
                  </Link>
                  <Link to={`/edit/${d.id}`}>
                    <button
                      onClick={() => console.log("Edit")}
                      className="border-none focus:outline-none"
                    >
                      <AiOutlineEdit size={20} />
                    </button>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Home;

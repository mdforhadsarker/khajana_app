// import axios from "axios";
import React, { useState } from "react";
// import { Button } from "./Button";
import { AiOutlineEdit, AiFillEye } from "react-icons/ai";
import { AiOutlinePlus } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import TopNav from "./TopNav";

export const Table = () => {
  const navigate = useNavigate();
  const [rows, setRows] = useState([
    {
      productType: "PT-21-01",
      productName: "Raw Material",
      productNameBn: "কাচামাল",
      sequenceNumber: 1.1,
      productStatus: "Active",
    },
    {
      productType: "PT-21-02",
      productName: "Trading",
      productNameBn: "বাণিজ্য",
      sequenceNumber: 1.4,
      productStatus: "Active",
    },
    {
      productType: "PT-21-03",
      productName: "Finishined Goods",
      productNameBn: "তৈরি পণ্য",
      sequenceNumber: 1.2,
      productStatus: "Active",
    },
    {
      productType: "PT-21-04",
      productName: "Capital Machinery",
      productNameBn: "মূলধন যন্ত্রপাতি",
      sequenceNumber: 1.5,
      productStatus: "Active",
    },
    {
      productType: "PT-21-05",
      productName: "PM Used in production",
      productNameBn: "উৎপাদনে ব্যাবহারিত মোড়ক",
      sequenceNumber: 1.7,
      productStatus: "Active",
    },
    {
      productType: "PT-21-06",
      productName: "Gas, Electricity",
      productNameBn: "গ্যাস, বিদ্যুৎ",
      sequenceNumber: 1.9,
      productStatus: "Active",
    },
  ]);

  return (
    <div>
      <TopNav />
      <div className="max-w-7xl mx-auto flex justify-between items-center  p-4">
        <button
          onClick={() => {
            console.log("Clicked");
            navigate("/productform", { replace: true });
          }}
          className="space-x-4 inline-flex items-center justify-center px-4 py-2 text-base font-medium leading-6 text-white whitespace-no-wrap bg-blue-600 border border-blue-700 rounded-md shadow-sm hover:bg-blue-700 focus:outline-none "
        >
          <AiOutlinePlus className="space-x-4 " />
          Add New
        </button>
      </div>
      <div className=" max-w-7xl mx-auto flex relative overflow-x-auto shadow-md sm:rounded-lg">
        <table
          rows={rows}
          className="w-full text-sm text-left text-gray-500 dark:text-gray-400"
        >
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
            {rows.map((row, idx) => {
              return (
                <tr
                  key={idx}
                  className="bg-white border-b dark:bg-gray-900 dark:border-gray-700"
                >
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {row.productType}
                  </th>
                  <td className="px-6 py-4">{row.productName}</td>
                  <td className="px-6 py-4">{row.productNameBn}</td>
                  <td className="px-6 py-4">{row.sequenceNumber}</td>
                  <td className="px-6 py-4">{row.productStatus} </td>
                  <td className="flex items-center px-6 py-4 space-x-3">
                    <a href="#">
                      <AiFillEye size={20} />
                    </a>
                    <a href="#">
                      <AiOutlineEdit size={20} />
                    </a>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <div className=" max-w-7xl  mx-auto  flex justify-between items-center">
        <span className="text-sm text-gray-700 dark:text-gray-400">
          Showing{" "}
          <span className="font-semibold text-gray-900 dark:text-white">1</span> to{" "}
          <span className="font-semibold text-gray-900 dark:text-white">6</span> of{" "}
          <span className="font-semibold text-gray-900 dark:text-white">100</span>{" "}
          Entries
        </span>
        <div className="inline-flex mt-2 xs:mt-0 space-x-4 ">
          <button className="flex items-center justify-center px-3 h-8 text-sm font-medium text-white bg-gray-800 rounded-l hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
            <svg
              className="w-3.5 h-3.5 mr-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M13 5H1m0 0 4 4M1 5l4-4"
              />
            </svg>
            Prev
          </button>
          <button className="flex items-center justify-center px-3 h-8 text-sm font-medium text-white bg-gray-800 border-0 border-l border-gray-700 rounded-r hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
            Next
            <svg
              className="w-3.5 h-3.5 ml-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

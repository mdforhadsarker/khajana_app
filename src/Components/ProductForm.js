import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

function ProductForm() {

    const [name, setName] = useState('');
    const [namebn, setNameBn] = useState('');
    const [snumber, setSnumber] = useState('');

  const navigate = useNavigate();
  return (
    <div>
      <div className="max-w-7xl mx-auto flex justify-between p-4">
        <button
          onClick={() => {
            console.log("Clicked");
            navigate("/", { replace: true });
          }}
          className="space-x-4 inline-flex items-center justify-center px-4 py-2 text-base font-medium leading-6 text-white whitespace-no-wrap bg-blue-600 border border-blue-700 rounded-md shadow-sm hover:bg-blue-700 focus:outline-none "
        >
          Back
        </button>
      </div>
      <div>
        <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
          <div class="px-6 py-6 lg:px-8">
            <h3 class="mb-4 text-xl font-medium text-gray-900 dark:text-white">
              Add Product Type
            </h3>
            <form class="space-y-6" action="#">
              <div>
                <label
                  for="name"
                  class="text-left block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Product Type Name: *
                </label>
                <input
                  type="text"
                  name="name"
                  value={name}
                  id="name"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                  onChange={e => setName(e.target.value)}
                  placeholder=" "
                  required
                />
              </div>
              <div>
                <label
                  for="name"
                  class=" text-left block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Product Type Name BN: *
                </label>
                <input
                  type="text"
                  name="namebn"
                  id="namebn"
                  value={namebn}
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                  onChange={e => setNameBn(e.target.value)}
                  placeholder=" "
                  required
                />
              </div>
              <div>
                <label
                  for="snumber"
                  class="text-left block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Sequence Number: *
                </label>
                <input
                  type="number"
                  name="snumber"
                  id="snumber"
                  value={snumber}
                  onChange={e => setSnumber(e.target.value)}
                  placeholder=""
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                  required
                />
              </div>

              <div className="flex justify-between">
                <button
                  type="Reset"
                  class="space-x-4 inline-flex items-center justify-center px-4 py-2 text-base font-medium leading-6 text-black whitespace-no-wrap bg-slate-200 border-slate-200 rounded-md shadow-sm focus:outline-none"
                >
                  Reset
                </button>
                <button
                  type="submit"
                  class="space-x-4 inline-flex items-center justify-center px-4 py-2 text-base font-medium leading-6 text-white whitespace-no-wrap bg-blue-600 border border-blue-700 rounded-md shadow-sm hover:bg-blue-700 focus:outline-none"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductForm;

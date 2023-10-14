import React from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

export const Button = () => {
  const navigate = useNavigate();

  return (
    <div>
      <button
        onClick={() => {
          navigate('/productform', { replace: true });
        }}
        className="space-x-4 inline-flex items-center justify-center px-4 py-2 text-base font-medium leading-6 text-white whitespace-no-wrap bg-blue-600 border border-blue-700 rounded-md shadow-sm hover:bg-blue-700 focus:outline-none "
      >
        <AiOutlinePlus className="space-x-4 " />
        Add New
      </button>
    </div>
  );
};

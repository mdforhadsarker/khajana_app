
import { AiFillHome } from "react-icons/ai";

const TopNav = () => {
  return (
    <div className=" max-w-7xl mx-auto flex justify-between items-center  p-4 ">
      <div className=" flex items-center">
        <div className=" cursor-pointer ">
          <AiFillHome size={25} />
        </div>
        <p className=" text-2xl sm:text-3xl px-2">
          <span>PRODUCT TYPE</span>
        </p>
      </div>
    </div>
  );
};

export default TopNav;

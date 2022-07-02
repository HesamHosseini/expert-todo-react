import { GoTasklist } from "react-icons/go";
import { FaFilter } from "react-icons/fa";
import { AiOutlinePlusSquare } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { toggleModalDisplay } from "../../Redux/TodoModalSlice";

const Header = () => {
  const modalStatus = useSelector((state) => state.toggleModal.value);
  const dispatch = useDispatch();
  return (
    <>
      <div className="text-3xl Header flex w-full bg-[#590CE1] text-white justify-between px-5 py-3">
        <div className="leftSide  flex-row  gap-5 flexCenter">
          <i>
            <GoTasklist color="white" />
          </i>
          TodoList
        </div>

        <div className="RightSide flexCenter flex-row  gap-5">
          <input
            placeholder="Search"
            className="text-base p-2 rounded w-[16rem]"
          />

          <i
            className="cursor-pointer"
            onClick={() => {
              console.log("fiter");
            }}
          >
            <FaFilter />
          </i>

          <i
            className="cursor-pointer"
            onClick={() => {
              dispatch(toggleModalDisplay());
            }}
          >
            <AiOutlinePlusSquare />
          </i>
        </div>
      </div>
    </>
  );
};

export default Header;

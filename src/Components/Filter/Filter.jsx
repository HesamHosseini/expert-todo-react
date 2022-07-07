import React, { Fragment, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import {
  filterShowState,
  setDeadLineFilter,
  setPriorityFilter,
  setStatusFilter,
} from "../../Redux/FilterShowSlice";

function Filter() {
  const PriorityOptions = ["Low", "Medium", "High", "All"];
  const StatusOptions = ["Todo", "Doing", "Done", "All"];
  const DeadlineOptions = ["Overdue", "For Today", "For the Future", "All"];
  const dispatch = useDispatch();
  const filterBarState = useSelector((state) => state.FilterShowSlice.value);
  const filterSelectorState = useSelector(
    (state) => state.FilterShowSlice.returnal
  );

  const handleFilterAnimation = () => {
    if (filterBarState === 1) {
      return "filterBarOpen";
    } else if (filterBarState === -1) {
      return "filterBarClose";
    } else {
      return "";
    }
  };
  const handleFilterBlur = () => {
    if (filterBarState === 1) {
      return "filterBackShow";
    } else if (filterBarState === -1) {
      return "filterBackHide hidden";
    } else {
      return "hidden";
    }
  };
  return (
    <Fragment>
      <div
        onClick={() => {
          dispatch(filterShowState(-1));
        }}
        className={`backdrop-blur-sm w-[100vw] top-0 left-0 z-10 h-[100vh] fixed bg-[#0003]  ${handleFilterBlur()}`}
      ></div>
      <div
        className={`w-[30vw] flex flex-col gap-4 z-20 h-[100vh] bg-slate-100 p-4 left-[100vw] fixed ${handleFilterAnimation()}`}
      >
        <div className="flex justify-between items-center">
          <h1 className="text-3xl">Filter</h1>
          <button
            className="text-3xl"
            onClick={() => {
              dispatch(filterShowState(-1));
            }}
          >
            <AiOutlineClose />
          </button>
        </div>
        <div className="flex flex-col gap-4">
          <label className="text-xl">Priority:</label>
          <select
            value={filterSelectorState.Priority}
            onChange={(e) => {
              dispatch(setPriorityFilter(e.target.value));
            }}
            className="w-full border rounded border-red-100 h-16"
          >
            {PriorityOptions.map((item) => (
              <option key={item}>{item}</option>
            ))}
          </select>
        </div>
        <div className="flex flex-col gap-4">
          <label className="text-xl">Status:</label>
          <select
            onChange={(e) => {
              dispatch(setStatusFilter(e.target.value));
            }}
            value={filterSelectorState.Status}
            className="w-full border rounded border-red-100 h-16"
          >
            {StatusOptions.map((item) => (
              <option key={item}>{item}</option>
            ))}
          </select>
        </div>
        <div className="flex flex-col gap-4">
          <label className="text-xl">DeadLine:</label>
          <select
            onChange={(e) => {
              dispatch(setDeadLineFilter(e.target.value));
            }}
            value={filterSelectorState.DeadLine}
            className="w-full border rounded border-red-100 h-16"
          >
            {DeadlineOptions.map((item) => (
              <option key={item}>{item}</option>
            ))}
          </select>
        </div>
      </div>
    </Fragment>
  );
}

export default Filter;

import React, { Fragment, useState } from "react";
import { FaRegCaretSquareDown } from "react-icons/fa";
import { useDispatch } from "react-redux";

export const TodoSelector = ({ disableStatus, options, state, setState }) => {
  const dispatch = useDispatch();
  // console.log(state, typeof state, "****");

  return (
    <Fragment>
      <select
        defaultValue={state}
        disabled={disableStatus ? true : false}
        className="border border-gray-400 rounded w-full"
        placeholder="select A item"
        name="item"
        id="item"
        onChange={(e) => {
          dispatch(setState(e.target.value));
        }}
      >
        {options.map((option) => (
          <option key={options.indexOf(option)} value={option}>
            {option}
          </option>
        ))}
      </select>
    </Fragment>
  );
};

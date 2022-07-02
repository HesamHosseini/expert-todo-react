import React, { Fragment } from "react";
import { FaRegCaretSquareDown } from "react-icons/fa";
import { useDispatch } from "react-redux";

export const TodoSelector = ({ options, state, setState }) => {
  const dispatch = useDispatch();
  return (
    <Fragment>
      <select
        value={state}
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

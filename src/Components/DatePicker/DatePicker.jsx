import React from "react";
import DatePicker, { DateObject } from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_en from "react-date-object/locales/persian_en";
const MyDatePicker = ({}) => {
  function handleChange(value) {
    console.log(value);
  }
  return (
    <DatePicker
      style={{
        height: "1rem",
      }}
      calendar={persian}
      locale={persian_en}
      onChange={handleChange}
    />
  );
};

export default MyDatePicker;

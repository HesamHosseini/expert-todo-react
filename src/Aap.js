import React, { useState } from "react";

import { Form, FormikProvider, useFormik } from "formik";
// import validationSchema from "./validationSchema";

import Date from "./Date";

const App = () => {
  const formik = useFormik({
    initialValues: {},
    // validationSchema: validationSchema,
  });

  return (
    <FormikProvider value={{ validationSchema, ...formik }}>
      <Date name="birthday" label="تاریخ تولد" />
    </FormikProvider>
  );
};

export default App;

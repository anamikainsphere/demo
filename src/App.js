import React from "react";
import { useFormik } from "formik";

const initialValues = {
  name: "",
  email: "",
  password: "",
  confirmpassword: "",
};

const App = () => {
  const { values, errors, handleSubmit, handleBlur, handleChange ,handleReset } = useFormik({
    initialValues: initialValues,
    onSubmit: (values) => {
      console.log(values); 
    },
  });
  // console.log("testing formik", Formik);
  return (
    <form className="formsection" onSubmit={handleSubmit}>
      <label>Enter your name</label>
      <input
        type="text"
        placeholder="Enter your name"
        name="name"
        value={values.name}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      <label>Email</label>
      <input
        type="email"
        placeholder="Enter your email"
        name="email"
        value={values.email}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      <label>Enter your password</label>
      <input
        type="password"
        placeholder="Enter your password"
        name="password"
        value={values.password}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      <label>Confirm your password</label>
      <input
        type="password"
        placeholder="Confirm your password"
        name="confirmpassword"

        value={values.confirmpassword}
        onChange={handleChange}
        onBlur={handleBlur}
      />

      <button type="submit">Submit</button>
      <button type="reset" onClick={handleReset}>Reset</button>
    </form>
  );
};

export default App;

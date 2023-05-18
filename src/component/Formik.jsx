import { useFormik } from "formik";
import React from "react";

const Formik = () => {
  let formik = useFormik({
    initialValues : {
      firstName : '',
      lastName : '',
      email : '',
      password : ''
    },
    onSubmit: (values) => {
      console.log(values);
    },
    validate: (values) => {
      let errors = {};
      console.log(errors);
      if(values.firstName === ""){
          errors.firstName = "This firstname field is required";
      } else if (values.lastName === ""){
          errors.lastName = "This lastname field is required";
      }
      console.log(errors);
      return errors;
    }
  });
  return (
    <>
      <form action="" onSubmit={formik.handleSubmit}>
        <div className="container">
          <div className="row w-50 mx-auto text-center mt-4 border rounded">
            <h1>Sign Up</h1><hr/>
            <div className="mx-auto text-center">
              <input
                type="text"
                className="form-control form-group my-3"
                name="firstName"
                placeholder="First-name"
                id=""
                onChange={formik.handleChange}
              />
              <small className="text-danger">{formik.errors.firstName}</small>
              <input
                type="text"
                className="form-control form-group my-3"
                name="lastName"
                placeholder="Last-name"
                id=""
                onChange={formik.handleChange}
              />
              <small className="text-danger">{formik.errors.lastName}</small>

              <input
                type="text"
                className="form-control form-group my-3"
                name="email"
                placeholder="Email"
                id=""
                onChange={formik.handleChange}
              />
              <small className="text-danger">{formik.errors.email}</small>

              <inputr
                type="text"
                className="form-control form-group my-3"
                name="password"
                placeholder="Password"
                id=""
                onChange={formik.handleChange}
              />
              <small className="text-danger">{formik.errors.password}</small>
                
              <button type="submit" className="btn btn-primary w-100 form-group my-3">
                Submit
              </button>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default Formik;

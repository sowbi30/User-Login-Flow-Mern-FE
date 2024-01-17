import React from 'react';
import { NavLink } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../../style/form.css';
import { useFormik } from 'formik';
import { registerSchema } from '../../schema/yupValidation';

const Register = () => {
  const formik = useFormik({
    initialValues: {
      fname: '',
      email: '',
      password: '',
      cpassword: '',
    },
    validationSchema: registerSchema,

    onSubmit: async (values) => {
      // Your form submission logic here
      console.log('Form submitted with values:', values);

      // Example: Your fetch logic can go here
      const data = await fetch("/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(values)
      });
      const res = await data.json();
      if (res.status === 201) {
        toast.success("Registration Successfully done 😃!", {
          position: "top-center"
        });
      }
    },
  });

  return (
    
      <section className="register">
        <div className="form-container">
          <div className="form_data">
            <div className="form_heading">
              <h1>Sign Up</h1>
              <p style={{ textAlign: 'center' }}>
                We are glad that you will be using Project Cloud to manage <br />
                your tasks! We hope that you will get like it.
              </p>
            </div>


          <form onSubmit={formik.handleSubmit}>
            <div className="form_input">
              <label htmlFor="fname">Name</label>
              <input
                type="text"
                id="fname"
                name="fname"
                placeholder="Enter Your Name"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.fname}
              />
              {formik.touched.fname && formik.errors.fname ? (
                <div className="error">{formik.errors.fname}</div>
              ) : null}
            </div>

            <div className="form_input">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter Your Email Address"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
              />
              {formik.touched.email && formik.errors.email ? (
                <div className="error">{formik.errors.email}</div>
              ) : null}
            </div>

            <div className="form_input">
              <label htmlFor="password">Password</label>
              <div className="two">
                <input
                  type={formik.values.showPassword ? 'text' : 'password'}
                  id="password"
                  name="password"
                  placeholder="Enter Your password"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.password}
                />
                <div
                  className="showpass"
                  onClick={() => formik.setFieldValue('showPassword', !formik.values.showPassword)}
                >
                  {formik.values.showPassword ? 'Hide' : 'Show'}
                </div>
              </div>
              {formik.touched.password && formik.errors.password ? (
                <div className="error">{formik.errors.password}</div>
              ) : null}
            </div>

            <div className="form_input">
              <label htmlFor="cpassword">Confirm Password</label>
              <div className="two">
                <input
                  type={formik.values.showCPassword ? 'text' : 'password'}
                  id="cpassword"
                  name="cpassword"
                  placeholder="Confirm password"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.cpassword}
                />
                <div
                  className="showpass"
                  onClick={() => formik.setFieldValue('showCPassword', !formik.values.showCPassword)}
                >
                  {formik.values.showCPassword ? 'Hide' : 'Show'}
                </div>
              </div>
              {formik.touched.cpassword && formik.errors.cpassword ? (
                <div className="error">{formik.errors.cpassword}</div>
              ) : null}
            </div>

            <button className="btn" type="submit">
              Sign Up
            </button>
            <p>
              Already have an account? <NavLink to="/login">Log In</NavLink>
            </p>
          </form>
            <ToastContainer />
        </div>
        </div>
      </section>
    
  );
};

export default Register;

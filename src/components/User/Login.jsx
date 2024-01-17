import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import { ToastContainer, toast } from 'react-toastify';
import '../../style/form.css';
import { loginSchema } from '../../schema/yupValidation';

const Login = () => {
  const history = useNavigate();

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
      validationSchema: loginSchema,
    
    onSubmit: async (values) => {
      try {
        const { email, password } = values;
        console.log('user login with values:', values);
        const data = await fetch('/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email, password }),
        });

        const res = await data.json();

          if (res.status === 201) {
              toast.success("Logged In Successfully 😃!", {
                  position: "top-center"
              });
          localStorage.setItem('usersdatatoken', res.result.token);
          history('/dashboard');
          formik.resetForm();
        } else {
          toast.error('Invalid Credentials', {
            position: 'top-center',
          });
        }
      } catch (error) {
        console.error('Error during login:', error);
      }
    },
  });

  return (
    
      <section className="login">
        <div className="form_data">
          <div className="form_heading">
            <h1>Welcome Back, Log In</h1>
            <p>Hi, we are you glad you are back. Please login.</p>
          </div>

          <form onSubmit={formik.handleSubmit}>
            <div className="form_input">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                name="email"
                id="email"
                placeholder="Enter Your Email Address"
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
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.password}
                  name="password"
                  id="password"
                  placeholder="Enter Your password"
                />
                <div
                  className="showpass"
                  onClick={() => formik.setFieldValue('showPassword', !formik.values.showPassword)}
                >
                  {!formik.values.showPassword ? 'Show' : 'Hide'}
                </div>
              </div>
              {formik.touched.password && formik.errors.password ? (
                <div className="error">{formik.errors.password}</div>
              ) : null}
            </div>

            <button className="btn" type="submit">
              Login
            </button>
            <p>
              Don't have an Account? <NavLink to="/register">Sign Up</NavLink>{' '}
            </p>
            <p style={{ color: 'black', fontWeight: 'bold' }}>
              Forgot Password <NavLink to="/password-reset">Click Here</NavLink>{' '}
            </p>
          </form>
          <ToastContainer />
        </div>
      </section>
  );
};

export default Login;

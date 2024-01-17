import React, { useEffect, useState } from 'react';
import { useNavigate, useParams, NavLink } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import { useFormik } from 'formik';
import { forgotPasswordSchema } from '../../schema/yupValidation';

const ForgotPassword = () => {
  const { id, token } = useParams();
  const history = useNavigate();
  const [data2, setData] = useState(false);
  const [message, setMessage] = useState('');
  const [password, setPassword] = useState('');

  const userValid = async () => {
    const res = await fetch(`/forgotpassword/${id}/${token}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const data = await res.json();

    if (data.status === 201) {
      console.log('user valid');
    } else {
      history('*');
    }
  };

  const formik = useFormik({
    initialValues: {
      password: '',
    },
      validationSchema: forgotPasswordSchema,
    
    onSubmit: async (values) => {
      try {
        const res = await fetch(`/${id}/${token}`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ password: values.password }),
        });

        const data = await res.json();

        if (data.status === 201) {
          setPassword('');
          setMessage(true);
        } else {
          toast.error('Token Expired. Generate a new link', {
            position: 'top-center',
          });
        }
      } catch (error) {
        console.error('Error while sending password:', error);
      }
    },
  });

  useEffect(() => {
    userValid();
    setTimeout(() => {
      setData(true);
    }, 3000);
  }, []);

  return (
  <div>
      {data2 ? (
        <>
          <section className="forgot-password">
            <div className="form_data">
              <div className="form_heading">
                <h1>Enter Your NEW Password</h1>
              </div>

              <form onSubmit={formik.handleSubmit}>
                {message ? (
                  <p style={{ color: 'green', fontWeight: 'bold' }}>Password Successfully Updated</p>
                ) : (
                  ''
                )}
                <div className="form_input">
                  <label htmlFor="password">New password</label>
                  <input
                    type="password"
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    name="password"
                    id="password"
                    placeholder="Enter Your new password"
                  />
                  {formik.touched.password && formik.errors.password ? (
                    <div className="error">{formik.errors.password}</div>
                  ) : null}
                </div>

                <button className="btn" type="submit">
                  Send
                </button>
              </form>
              <p>
                <NavLink to="/">Home</NavLink>
              </p>
              <ToastContainer />
            </div>
          </section>
        </>
      ) : (
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
          Loading... &nbsp;
          <CircularProgress />
        </Box>
      )}
      </div>
  );
};

export default ForgotPassword;

import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { passwordResetSchema } from '../../schema/yupValidation';
import { useFormik } from 'formik';

const PasswordReset = () => {
  const [message, setMessage] = useState('');

  const formik = useFormik({
    initialValues: {
      email: '',
    },
      validationSchema: passwordResetSchema,
    
    onSubmit: async (values) => {
      try {
        const res = await fetch('/sendpasswordlink', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email: values.email }),
        });

        const data = await res.json();

        if (data.status === 201) {
          formik.resetForm();
          setMessage(true);
        } else {
          toast.error('Invalid User', {
            position: 'top-center',
          });
        }
      } catch (error) {
        console.error('Error while sending password reset link:', error);
      }
    },
  });

  return (
    
      <section className="password-reset">
        <div className="form_data">
          <div className="form_heading">
            <h1>Enter Your Email</h1>
          </div>

          {message ? (
            <p style={{ color: 'green', fontWeight: 'bold' }}>Password reset link sent successfully to your email</p>
          ) : (
            ''
          )}
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

            <button className="btn" type="submit">
              Send
            </button>
          </form>
          <ToastContainer />
        </div>
      </section>
    
  );
};

export default PasswordReset;

// validationSchemas.js
import * as Yup from 'yup';

export const registerSchema = Yup.object({
  fname: Yup.string()
    .required('Name is required')
    .min(3, 'Name should be at least 3 characters')
    .max(25, 'Name should not exceed 15 characters'),
  email: Yup.string().email('Invalid email address').required('Email is required'),
  password: Yup.string()
    .required('Password is required')
    .min(6, 'Password should be at least 6 characters'),
  cpassword: Yup.string()
    .required('Confirm Password is required')
    .oneOf([Yup.ref('password'), null], 'Passwords must match'),
});

export const loginSchema = Yup.object({
  email: Yup.string().email('Invalid email address').required('Email is required'),
  password: Yup.string().required('Password is required').min(6, 'Password must be at least 6 characters'),
});

export const forgotPasswordSchema = Yup.object({
  password: Yup.string().required('Password is required').min(6, 'Password must be at least 6 characters'),
});

export const passwordResetSchema = Yup.object({
  email: Yup.string().email('Invalid email address').required('Email is required'),
});

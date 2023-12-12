
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import axios from 'axios';  
import image from '../images/Logo.jpg';
import styles from './RegistrationForm.module.scss';
import Button from '../components/Button';
import { PATHS } from '../routes/consts';
import googleIcon from '../images/google.svg';
import anotherIcon from "../images/facebook.svg";
import * as Yup from 'yup';


const initialValues = {
  name: '',
  email: '',
  password: '',
};

const validationSchema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
});

const RegistrationForm = () => {
  const [registrationResponse, setRegistrationResponse] = useState(null);

  const onSubmit = async (values) => {
    try {
      const response = await axios.post('http://localhost:3000/users', values);
      const responseFromServer = { message: 'User registered successfully!' };
      setRegistrationResponse(responseFromServer);
      console.log('User registration successful:', response.data);
    } catch (error) {
      console.error('User registration failed:', error);
      setRegistrationResponse({ error: 'User registration failed. Please try again.' });
    }
  };

  return (
    <div className={styles.formContainer}>
      <div className={styles.container}>
        <div className={styles.leftSideContainer}>
          <img className={styles.basicImage} src={image} alt="logo" />
        </div>
        <div className={styles.rightSideContainer}>
          <div className={styles.containerStyle}>
            <h2>Get Started</h2>
            <div className={styles.loginContainer}>
              <p className={styles.alreadyLogged}>Already have an account?</p>
              <Link className={styles.link} to={PATHS.Login}>
                Log in
              </Link>
            </div>
            <div className={styles.buttonContainer}>
              <Button
                label="Sign up"
                type="button"
                style={{
                  backgroundColor: 'white',
                  color: 'black',
                  borderRadius: '5px',
                  padding: '10px 40px 10px 40px',
                  border: 'none',
                  boxShadow: 'rgba(0, 0, 0, 0.05) 0px 0px 0px 1px',
                }}
                icon={googleIcon}
              />

              <Button
                label="Sign up"
                type="button"
                style={{
                  backgroundColor: '#4F70B5',
                  color: 'white',
                  borderRadius: '5px',
                  padding: '10px 40px 10px 40px',
                  border: 'none',
                }}
                icon={anotherIcon}
              />
            </div>
            <h3>Or</h3>
            <div className={styles.inputContainer}>
              <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
                <Form className={styles.form}>
                  <div className={styles.oneInputContainer}>
                    <label htmlFor="name">Name</label>
                    <Field className={styles.fieldInput} type="text" id="name" name="name" placeholder="Joly Shahab" />
                    <ErrorMessage name="name" component="div" className={styles.error} />
                  </div>

                  <div className={styles.oneInputContainer}>
                    <label htmlFor="email">Email</label>
                    <Field className={styles.fieldInput} type="text" id="email" name="email" placeholder="abc@gmail.com" />
                    <ErrorMessage name="email" component="div" className={styles.error} />
                  </div>

                  <div className={styles.oneInputContainer}>
                    <label htmlFor="password">Password</label>
                    <Field className={styles.fieldInput} type="password" id="password" name="password" placeholder="......" />
                    <ErrorMessage name="password" component="div" className={styles.error} />
                  </div>

                  <div className={styles.submitContainer}>
                    <Button
                      label="Submit"
                      type="submit"
                      style={{
                        backgroundColor: '#F2877D',
                        color: 'white',
                        borderRadius: '5px',
                        padding: '10px 40px 10px 40px',
                        border: 'none',
                        boxShadow: 'rgba(0, 0, 0, 0.05) 0px 0px 0px 1px',
                      }}
                    />
                  </div>
                </Form>
              </Formik>

              {registrationResponse && (
                <div className={styles.responseContainer}>
                  {registrationResponse.error ? (
                    <div className={styles.error}>{registrationResponse.error}</div>
                  ) : (
                    <div className={styles.success}>{registrationResponse.message}</div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegistrationForm;

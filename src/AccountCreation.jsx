// AccountCreationForm.js
import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";

const AccountCreationForm = () => {
  const initialValues = {
    email: "",
    password: "",
    // Add other fields as needed
  };

  const handleSubmit = (values, { setSubmitting }) => {
    // Handle form submission here
    console.log(values);
    setSubmitting(false);
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      <Form>
        <label htmlFor="email">Email</label>
        <Field type="email" id="email" name="email" />
        <ErrorMessage name="email" component="div" />

        <label htmlFor="password">Password</label>
        <Field type="password" id="password" name="password" />
        <ErrorMessage name="password" component="div" />

        <button type="submit">Create Account</button>
      </Form>
    </Formik>
  );
};

export default AccountCreationForm;

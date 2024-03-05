import React, { useState } from "react";
import {
  FormControl,
  InputLabel,
  Input,
  FormHelperText,
  Button,
  Box,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { formData } from "./action"; // Assuming formData is defined correctly

function Login() {
  const [form, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });
  const dispatch = useDispatch();
  const formDataState = useSelector((state) => state.formData); // Adjust the state selector as per your Redux store structure

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(form);
    // Dispatch the form data action here
    dispatch(formData(form));
  };

  return (
    <div
      style={{
        display: "flex",
        margin: "20px",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <form
        onSubmit={submitHandler}
        style={{ border: "1px solid black", margin: "10px", padding: "10px" }}
      >
        <Box>
          <FormControl>
            <InputLabel htmlFor="email">Email address</InputLabel>
            <Input
              id="email"
              name="email"
              type="email"
              onChange={changeHandler}
              value={form.email}
              required
              style={{ margin: "20px" }}
            />
            <FormHelperText>We'll never share your email.</FormHelperText>
          </FormControl>
        </Box>

        <Box>
          <FormControl>
            <InputLabel htmlFor="password">Password</InputLabel>
            <Input
              id="password"
              name="password"
              type="password"
              onChange={changeHandler}
              value={form.password}
              required
              style={{ margin: "20px" }}
            />
          </FormControl>
        </Box>

        <Box>
          <FormControl>
            <InputLabel htmlFor="confirmPassword">Confirm Password</InputLabel>
            <Input
              id="confirmPassword"
              name="confirmPassword"
              type="password"
              onChange={changeHandler}
              value={form.confirmPassword}
              required
              style={{ margin: "20px" }}
            />
          </FormControl>
        </Box>

        <Button type="submit" variant="contained">
          Submit
        </Button>
      </form>
    </div>
  );
}

export default Login;

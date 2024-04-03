import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchLogin } from "../action/actions";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [level, setLevel] = useState("");
  const [errors, setErrors] = useState({});

  const handleInput = (e) => {
    const { name, value } = e.target;
    if (name === "email") setEmail(value);
    else if (name === "password") setPassword(value);
    else if (name === "level") setLevel(value);
  };

  const navigate = useNavigate();

  const dispatch = useDispatch();
  const Login = useSelector((state) => state.login.login);

  console.log(Login);

  const handleSubmit = (event) => {
    event.preventDefault();
    let errorsSubmit = {};
    let flag = true;

    if (email === "") {
      errorsSubmit.email = "Please enter email";
      flag = false;
    }
    if (password === "") {
      errorsSubmit.password = "Please enter password";
      flag = false;
    }
    if (!flag) {
      setErrors(errorsSubmit);
      alert("Login failed");
    }
    else
    {
      dispatch(fetchLogin(email, password))
        .then((data) => {
          console.log(data);
         navigate("/")
        })
        .catch((error) => {
          // Xử lý khi có lỗi trong quá trình đăng nhập
          console.error("Lỗi khi đăng nhập:", error);
        });
    }
  };

  return (
    <Box sx={{ maxWidth: 400, margin: "auto", mt: 11 }}>
      <h3>Login</h3>
      <form
        onSubmit={handleSubmit}
        style={{ display: "flex", flexDirection: "column" }}>
        <TextField
          fullWidth
          label="Email"
          name="email"
          value={email}
          onChange={handleInput}
          margin="normal"
        />
        <TextField
          fullWidth
          label="password"
          name="password"
          type="password"
          value={password}
          onChange={handleInput}
          margin="normal"
        />

        <Button
          onClick={handleSubmit}
          variant="contained"
          type="submit"
          sx={{ width: 400, mb: 3 }}>
          Login
        </Button>
        <Button
          onClick={() => navigate("/register")}
          variant="contained"
          type="submit"
          sx={{ width: 400, mb: 4 }}>
          Register
        </Button>
      </form>
    </Box>
  );
}

export default Login;

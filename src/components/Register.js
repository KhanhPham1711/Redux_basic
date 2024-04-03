import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchRegister } from "../action/actions";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");

  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const Register = useSelector((state) => state.register.register);


  const handleSubmit = (event) => {
    event.preventDefault();
    let errorsSubmit = {};
    let flag = true;

    if (name === "") {
      errorsSubmit.name = "Please enter username";
      flag = false;
    }
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
      alert("Register failed");
    } else {
        dispatch(fetchRegister(email, password, name, address, phone))
        .then((data) => {
          console.log("Registration successful", data);
          navigate("/login");
          // Dispatch any additional actions or handle success
        })
        .catch((error) => {
          console.error("Registration failed", error);
          // Dispatch any additional actions or handle error
        });
    }
  };

  return (
    <Box sx={{ maxWidth: 400, margin: "auto", mt: 11 }}>
      <h3>Register</h3>
      <form
        onSubmit={handleSubmit}
        style={{ display: "flex", flexDirection: "column" }}>
        <TextField
          fullWidth
          label="name"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          margin="normal"
        />
        <TextField
          fullWidth
          label="Email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          margin="normal"
        />
        <TextField
          fullWidth
          label="Password"
          name="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          margin="normal"
        />
        <TextField
          fullWidth
          label="address"
          name="address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          margin="normal"
        />
        <TextField
          fullWidth
          label="phone"
          name="phone"
          value={phone}
          text="number"
          onChange={(e) => setPhone(e.target.value)}
          margin="normal"
        />
        <Button
          onClick={handleSubmit}
          variant="contained"
          type="submit"
          sx={{ mt: 2 }}>
          Register
        </Button>
      </form>
    </Box>
  );
}

export default Register;

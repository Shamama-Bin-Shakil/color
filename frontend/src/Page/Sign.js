import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import Header from "../Components/Header";
import ColorContext from "../context/ColorContext";
import { useAuth0 } from "@auth0/auth0-react";

import { IoLogoGoogle } from "react-icons/io5";


const Sign = () => {

  const { loginWithRedirect, logout, user, isAuthenticated, isLoading } =
    useAuth0();
  console.log(isAuthenticated);
  if (localStorage.getItem("auth-token")) {
    window.location.href = "/";
  }

  const context = useContext(ColorContext);
  const { authSign } = context;
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmpassword: "",
  });

  const HandleOnChange = (e) => {
    const { name, value } = e.target;
    setForm((preValue) => {
      return {
        ...preValue,
        [name]: value,
      };
    });
  };

  const HandleForm = (e) => {
    e.preventDefault();
    authSign(form);
  };

  return (
    <>
      <Header />
      <div id="formContainer">
        <form className="formContent" id="registerForm" onSubmit={HandleForm}>
          <h1>User Register</h1>
          <input
            type="text"
            onChange={HandleOnChange}
            value={form.name}
            name="name"
            placeholder="Name"
          />
          <input
            type="text"
            onChange={HandleOnChange}
            value={form.email}
            name="email"
            placeholder="Email"
          />
          <input
            type="password"
            onChange={HandleOnChange}
            value={form.password}
            name="password"
            placeholder="Password"
          />
          <input
            type="password"
            name="confirmpassword"
            onChange={HandleOnChange}
            value={form.confirmpassword}
            placeholder="Confirm Password"
          />

          <button type="submit">Register</button>
          <br />
          <div className="info">
            <Link exact to="/login">
              already account? Login
            </Link>
          </div>
          <br />
          {!isAuthenticated && (
            <button type="button" onClick={() => loginWithRedirect()}>
             <IoLogoGoogle  className="google-icon"/>&nbsp;&nbsp; Login with Google Account
            </button>
          )}
        </form>
      </div>
    </>
  );
};

export default Sign;

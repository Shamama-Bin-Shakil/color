import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import Header from "../Components/Header";
import colorContext from "../context/ColorContext";

const Login = () => {
  if (localStorage.getItem("auth-token")) {
    window.location.href = "/";
  }

  const context = useContext(colorContext);
  const { authLogin } = context;
  // console.log(context.authLogin);
  const [form, setForm] = useState({
    email: "",
    password: "",
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
    authLogin(form);
  };
  return (
    <>
      <Header />
      <div id="formContainer">
        <form className="formContent" id="loginForm" onSubmit={HandleForm}>
          <h1>User Login</h1>
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
          <button type="submit">Login</button>
          <div className="info">
            <Link exact to="/sign">
              no account? Register
            </Link>
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;

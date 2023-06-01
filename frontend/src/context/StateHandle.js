import React, { useState } from "react";
import ColorContext from "./ColorContext";
import swal from "sweetalert";
const StateHandle = (props) => {
  const HOST = "http://localhost:8080";
  // const HOST = process.env.REACT_APP_HOST;

  const [userInfo, setUserInfo] = useState([]);
  const [color, setColor] = useState([]);
  const [loading, setLoading] = useState(false);

  const authLogin = async (data) => {
    if (data.email === "") {
      swal("Error", "Email field is required", "error");
    } else if (data.password === "") {
      swal("Error", "Password field is required", "error");
    } else {
      const response = await fetch(`${HOST}/api/auth/authlogin`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: data.email, password: data.password }),
      });
      const result = await response.json();
      if (result) {
        if (result.msg === "success") {
          localStorage.setItem("auth-token", result.data);
          swal("Success", "Login Successfully", "success").then((value) => {
            if (value) {
              window.location.href = "/";
            }
          });
        } else {
          swal("Error", result.msg, "error");
        }
      }
    }
  };

  const authSign = async (data) => {
    if (data.name === "") {
      swal("Error", "Name field is required", "error");
    } else if (data.email === "") {
      swal("Error", "Email field is required", "error");
    } else if (data.password === "") {
      swal("Error", "Password field is required", "error");
    } else if (data.confirmpassword === "") {
      swal("Error", "Confirm Password field is required", "error");
    } else {
      const response = await fetch(`${HOST}/api/auth/auth`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.name,
          email: data.email,
          password: data.password,
          confirmpassword: data.confirmpassword,
        }),
      });
      const result = await response.json();
      if (result.msg === "save") {
        swal("Success", "Account Create Successfully", "success").then(
          (value) => {
            if (value) {
              window.location.href = "/login";
            }
          }
        );
      } else {
        swal("Error", result.msg, "error");
      }
    }
  };

  const logout = () => {
    localStorage.removeItem("auth-token");
    window.location.href = "/login";
  };

  const userDetail = async () => {
    const response = await fetch(`${HOST}/api/auth/authdetail`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("auth-token"),
      },
    });
    const result = await response.json();
    // console.log(result);
    if (result) {
      setUserInfo(result.data);
    }
  };

  const colorAdd = async (data) => {
    if (data.colorCode.charAt() !== "#") {
      alert("Please First Character #");
    } else {
      const response = await fetch(`${HOST}/api/color/post`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "auth-token": localStorage.getItem("auth-token"),
        },
        body: JSON.stringify({ color_name: data.colorCode }),
      });
      const result = await response.json();
      if (result) {
        swal({
          title: "Success",
          text: "Color Add Successfully",
          icon: "success",
        }).then((value) => {
          if (value) {
            data.colorCode = "";
            setUserInfo(result.data);
          }
        });
      }
    }
  };

  const getColor = async () => {
    setLoading(true);
    const response = await fetch(`${HOST}/api/color/api_key`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const result = await response.json();
    if (result) {
      setLoading(false);
      setColor(result.data);
    }
  };

  return (
    <ColorContext.Provider
      value={{
        authLogin,
        authSign,
        logout,
        userDetail,
        userInfo,
        colorAdd,
        getColor,
        color,
        loading,
        setLoading,
      }}
    >
      {props.children}
    </ColorContext.Provider>
  );
};

export default StateHandle;

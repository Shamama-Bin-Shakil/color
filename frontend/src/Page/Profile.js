import React, { useContext, useEffect } from "react";
import Header from "../Components/Header";
import { IoLogoFacebook, IoLogoWhatsapp, IoLogoYoutube } from "react-icons/io5";
import ColorContext from "../context/ColorContext";
import { useAuth0 } from "@auth0/auth0-react";
const Profile = () => {
  const { user, isAuthenticated } = useAuth0();

  const context = useContext(ColorContext);
  const { userDetail, userInfo } = context;
  useEffect(() => {
    if (!isAuthenticated) {
      userDetail(); // eslint-disable-next-line
    }
  }, []);

  if (!localStorage.getItem("auth-token") && isAuthenticated !== true) {
    window.location.href = "/";
  }

  return (
    <>
      <Header />
      <div id="profileContainer">
        <div className="profileLayout">
          <div className="profileImage">
            <img src={"sir_1.jpg"} alt="profileImage" />
          </div>
          <h2>{isAuthenticated === true ? user.given_name : userInfo.name}</h2>
          <p>{isAuthenticated === true ? user.email : userInfo.email}</p>
          <div className="social-icon">
            <div className="item fb">
              <IoLogoFacebook />
            </div>
            <div className="item whatsapp">
              <IoLogoWhatsapp />
            </div>
            <div className="item youtube">
              <IoLogoYoutube />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;

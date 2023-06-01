import React, { useContext } from "react";
import { Link } from "react-router-dom";
import ColorContext from "../context/ColorContext";
import { useAuth0 } from "@auth0/auth0-react";

const Header = () => {
  const { user, isAuthenticated } = useAuth0();
  const context = useContext(ColorContext);
  const { logout } = context;
  return (
    <header>
      <nav>
        <div className="logo">
          <h2>
            <Link exact to="/">
              CoLoR Pattern
            </Link>
          </h2>
        </div>
        <div className="menu">
          <li>
            <Link exact to={`${process.env.REACT_APP_HOST}/api/color/api_key`}>
              Api
            </Link>
          </li>

          {!localStorage.getItem("auth-token") && (isAuthenticated !== true) ? (
            <>
              <li>
                <Link exact to="/sign">
                  Sign Up
                </Link>
              </li>
              <li>
                <Link exact to="/login">
                  Login
                </Link>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link exact to="/profile">
                  Profile
                </Link>
              </li>
              <li>
                <Link exact to="/color">
                  Color
                </Link>
              </li>
              <li onClick={() => logout()}>
                <Link>Logout</Link>
              </li>
            </>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;

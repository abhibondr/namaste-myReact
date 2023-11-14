import { useState } from "react";
import { LOGO_URL } from "../utils/constant";
import { Link } from "react-router-dom";

const Header = () => {
  const [loginValue, setLoginValue] = useState("Login");

  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} alt="myLOGO" />
      </div>

      <div className="nav-items">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
          <li>
            <Link>Cart</Link>
          </li>
          <li>
            <button
              className="login"
              onClick={() =>
                loginValue === "Login"
                  ? setLoginValue("Logout")
                  : setLoginValue("Login")
              }
            >
              {loginValue}
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;

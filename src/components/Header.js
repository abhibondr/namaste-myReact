import { useState } from "react";
import { LOGO_URL } from "../utils/constant";

const Header = () => {
  const [loginValue, setLoginValue] = useState("Login");

  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} alt="myLOGO" />
      </div>

      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
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

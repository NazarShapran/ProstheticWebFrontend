import React from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../svgs/logo_new.svg?react";
import { PersonOutline } from "@mui/icons-material";
import CustomLink from "./CustomLink";

const Header = () => {
  const navigate = useNavigate();

  const handleCabinetClick = () => {
    const token = localStorage.getItem("token");
    if (token) {
      navigate("/profile");
    } else {
      navigate("/signIn");
    }
  };

  return (
    <header className="header-container">
      <div className="header-content">
        <Logo className="header-logo" />
        <ul className="header-nav">
          <li>
            <CustomLink to="/">Головна</CustomLink>
          </li>
          <li>
            <CustomLink to="/catalog">Протези</CustomLink>
          </li>
          <li>
            <CustomLink to="/about">Про нас</CustomLink>
          </li>
        </ul>
        <button
          type="button"
          className="header-cabinet-btn"
          id="btnSignIn"
          onClick={handleCabinetClick}
        >
          <PersonOutline className="header-cabinet-icon" sx={{ fontSize: 24 }} />
          Кабінет
        </button>
      </div>
    </header>
  );
};

export default Header;
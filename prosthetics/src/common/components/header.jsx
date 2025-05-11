import React from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../svgs/logo_new.svg?react";
import { PersonOutline } from "@mui/icons-material";
import  CustomLink  from "./CustomLink";

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
    <header className="layout-header">
      <Logo className="logo" />
      <ul>
        <li>
          <CustomLink to="/">Головна</CustomLink>
        </li>
        <li>
          <CustomLink to="/catalog">Протези</CustomLink>
        </li>
        <li>
          <CustomLink to="/about">Про нас</CustomLink>
        </li>
        <li>
          <button
            type="button"
            className="signin_btn"
            id="btnSignIn"
            onClick={handleCabinetClick}
          >
            <PersonOutline className="signin_icon" sx={{ fontSize: 24 }} />
            Кабінет
          </button>
        </li>
      </ul>
    </header>
  );
};

export default Header;

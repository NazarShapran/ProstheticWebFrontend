import React from "react";
import {NavLink } from "react-router-dom";
import Logo from "../svgs/logo_new.svg?react";
import { PersonOutline } from "@mui/icons-material";

const CustomLink = ({ to, children }) => (
  <NavLink to={to} className={({ isActive }) => (isActive ? "active" : "")}>
    {children}
  </NavLink>
);

const Header = () => {
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
          <CustomLink to="/signIn">
            <button type="button" className="signin_btn" id="btnSignIn">
              <PersonOutline className="signin_icon" sx={{ fontSize: 24 }} />
              Кабінет
            </button>
          </CustomLink>
        </li>
      </ul>
    </header>
  );
};

export default Header;

import React from "react";
import { Outlet, NavLink } from "react-router-dom";
import {
  Instagram,
  Facebook,
  Twitter,
  Email,
  Phone,
  Telegram,
} from "@mui/icons-material";
import "../styles/layoutStyles.css";
import Logo from "../svgs/logo_ReLife.svg?react";

const CustomLink = ({ to, children }) => (
  <NavLink to={to} className={({ isActive }) => (isActive ? "active" : "")}>
    {children}
  </NavLink>
);

const Layout = () => {
  return (
    <div className="layout-container">
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
              <button>SignIn</button>
            </CustomLink>
          </li>
        </ul>
      </header>
      <main className="layout-content">
        <Outlet />
      </main>
      <footer className="layout-footer">
        <div className="footer-container">
          <p>
            Допомагаємо українським захисникам повернутись до активного життя.
          </p>
          <p>Обирайте протез та залишайте заявку просто зараз!</p>
          <div className="footer-actions">
            <CustomLink to="/form">
              <button>Залишити заявку</button>
            </CustomLink>
            <CustomLink to="/catalog">
              <button>Переглянути протези</button>
            </CustomLink>
          </div>
          <div className="footer-socials">
            <ul>
              <li>
                <CustomLink to="https://www.instagram.com/">
                  <Instagram />
                </CustomLink>
              </li>
              <li>
                <CustomLink to="https://www.facebook.com/">
                  <Facebook />
                </CustomLink>
              </li>
              <li>
                <CustomLink to="https://twitter.com/">
                  <Twitter />
                </CustomLink>
              </li>
              <li>
                <CustomLink to="https://web.telegram.org/">
                  <Telegram />
                </CustomLink>
              </li>
            </ul>
          </div>
          <div className="footer-contacts">
            <ul>
              <li>
                <a href="tel:+380123456789">
                  <Phone />
                  +38 (012) 345-67-89
                </a>
              </li>
              <li>
                <a href="mailto:0r0oU@example.com">
                  <Email />
                  0r0oU@example.com
                </a>
              </li>
            </ul>
          </div>
          <p>© 2025 Prosthetics. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;

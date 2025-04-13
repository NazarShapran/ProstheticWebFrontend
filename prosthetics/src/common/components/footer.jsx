import React from "react";
import { NavLink } from "react-router-dom";
import {
  Instagram,
  Facebook,
  Twitter,
  Email,
  Phone,
  Telegram,
} from "@mui/icons-material";

const CustomLink = ({ to, children }) => (
  <NavLink to={to} className={({ isActive }) => (isActive ? "active" : "")}>
    {children}
  </NavLink>
);

const Footer = () => {
  return (
    <footer className="layout-footer">
      <div className="footer-container">
        <p className="footer-text-primary">
          Допомагаємо українським захисникам повернутись до активного життя.
        </p>
        <p className="footer-text-secondary">
          Обирайте протез та залишайте заявку просто зараз!
        </p>
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
                <Phone sx={{ color: "#64D9B9" }} />
                +38 (012) 345-67-89
              </a>
            </li>
            <li>
              <a href="mailto:0r0oU@example.com">
                <Email sx={{ color: "#64D9B9" }} />
                0r0oU@example.com
              </a>
            </li>
          </ul>
        </div>
        <p>© 2025 Prosthetics. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

import React from "react";
import { Instagram, Facebook, Twitter, Telegram } from "@mui/icons-material";
import Phone from "../../assets/phone.svg?react";
import Email from "../../assets/email.svg?react";
import CustomLink from "./CustomLink";

const Footer = () => {
  return (
    <footer className="layout-footer">
      <div className="footer-container">
        <div className="footer-text-container">
          <p className="footer-text-primary">
            Допомагаємо українським захисникам повернутись до активного життя.
          </p>
          <p className="footer-text-secondary">
            Обирайте протез та залишайте заявку просто зараз!
          </p>
        </div>
        <div className="footer-actions">
          <CustomLink to="/form">
            <button className="footer-btn-cta">Залишити заявку</button>
          </CustomLink>
          <CustomLink to="/catalog">
            <button className="footer-btn-secondary">
              Переглянути протези
            </button>
          </CustomLink>
        </div>
        <div className="footer-contacts">
          <ul>
            <li>
              <a href="tel:+380123456789">
                <Phone sx={{ color: "#73A965" }} />
                +38 (012) 345-67-89
              </a>
            </li>
            <li>
              <a href="mailto:0r0oU@example.com">
                <Email sx={{ color: "#73A965" }} />
                0r0oU@example.com
              </a>
            </li>
          </ul>
        </div>
        <div className="footer-socials">
          <ul>
            <li>
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram />
              </a>
            </li>
            <li>
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Facebook />
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Twitter />
              </a>
            </li>
            <li>
              <a
                href="https://web.telegram.org/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Telegram />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

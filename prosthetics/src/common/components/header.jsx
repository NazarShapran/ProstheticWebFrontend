import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../../common/svgs/logo.svg?react";
import PersonWhite from "../../assets/person-white.svg?react";
import PersonGreen from "../../assets/person-green.svg?react";
import CustomLink from "./CustomLink";

const Header = () => {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(true);
  const [isHeaderHovered, setIsHeaderHovered] = useState(false);
  const [isButtonHovered, setIsButtonHovered] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    let hideTimeout;
    let scrollTimeout;
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      clearTimeout(scrollTimeout);
      
      setIsVisible(true);
      setIsScrolling(true);

      scrollTimeout = setTimeout(() => {
        setIsScrolling(false);
        
        if (currentScrollY > 0 && !isHeaderHovered) {
          clearTimeout(hideTimeout);
          hideTimeout = setTimeout(() => {
            setIsVisible(false);
          }, 5000);
        }
      }, 150); // Detect scroll stop after 150ms

      lastScrollY = currentScrollY;
    };

    const handleMouseMove = (e) => {
      if (e.clientY <= 100) {
        setIsVisible(true);
        clearTimeout(hideTimeout);
      }
    };

    // Initial visibility logic
    if (!isHeaderHovered && window.scrollY > 0) {
      hideTimeout = setTimeout(() => {
        if (!isScrolling) {
          setIsVisible(false);
        }
      }, 5000);
    }

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
      clearTimeout(hideTimeout);
      clearTimeout(scrollTimeout);
    };
  }, [isHeaderHovered, isScrolling]);

  const handleCabinetClick = () => {
    const token = localStorage.getItem("token");
    if (token) {
      navigate("/profile");
    } else {
      navigate("/signIn");
    }
  };

  return (
    <header 
      className={`header-container ${isVisible ? 'visible' : 'hidden'}`}
      onMouseEnter={() => {
        setIsHeaderHovered(true);
        setIsVisible(true);
      }}
      onMouseLeave={() => {
        setIsHeaderHovered(false);
        if (window.scrollY > 0 && !isScrolling) {
          setTimeout(() => {
            setIsVisible(false);
          }, 3000);
        }
      }}
    >
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
          onMouseEnter={() => setIsButtonHovered(true)}
          onMouseLeave={() => setIsButtonHovered(false)}
        >
          {isButtonHovered ? (
            <PersonGreen className="header-cabinet-icon" />
          ) : (
            <PersonWhite className="header-cabinet-icon" />
          )}
          Кабінет
        </button>
      </div>
    </header>
  );
};

export default Header;
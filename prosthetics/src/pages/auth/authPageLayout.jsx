import React from "react";
import { Link } from "react-router-dom";

const AuthPageLayout = () => {
  return (
    <div className="auth-page-layout">
      <h2>Welcome! Please login or register</h2>
      <div className="auth-links">
        <Link to="/signin" className="auth-link">
          Login
        </Link>
        <Link to="/signup" className="auth-link">
          Register
        </Link>
      </div>
    </div>
  );
};

export default AuthPageLayout;

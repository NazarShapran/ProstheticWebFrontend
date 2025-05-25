import React, { useState } from "react";
import { useSignIn } from "./hooks/useSignIn";
import Email from "../../../assets/email-white.svg?react";
import WarningIcon from '@mui/icons-material/Warning';
import KeyIcon from "../../../assets/key.svg?react";
import EyeOpen from "../../../assets/eye.svg?react";
import EyeClosed from "../../../assets/eye-close.svg?react";
import Home from "../../../assets/home.svg?react";
import { useNavigate } from "react-router-dom";
import SnackbarAlert from "../../../common/components/SnackbarAlert";
import { CircularProgress } from "@mui/material";
import "./signInStyles.css";

export default function SignInPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "error"
  });
  const navigate = useNavigate();

  const { loading, error, handleSubmit } = useSignIn();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleHomeClick = () => {
    navigate('/');
  };

  const handleCloseSnackbar = () => {
    setSnackbar(prev => ({ ...prev, open: false }));
  };

  const showError = (message) => {
    setSnackbar({
      open: true,
      message,
      severity: "error"
    });
  };

  const validateForm = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      showError("Введіть правильний формат електронної пошти");
      return false;
    }
    if (password.length < 6) {
      showError("Пароль має містити мінімум 6 символів");
      return false;
    }
    return true;
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    
    const result = await handleSubmit(email, password);
    if (!result.success) {
      showError(result.error || "Невірний email або пароль");
    }
  };

  return (
    <div className="sign-in-page">
      <SnackbarAlert
        open={snackbar.open}
        onClose={handleCloseSnackbar}
        message={snackbar.message}
        severity={snackbar.severity}
        autoHideDuration={5000}
      />
      
      <div className="sign-in-form-container">
        {loading && (
          <div className="loading-overlay">
            <CircularProgress style={{ color: '#73A965' }} />
          </div>
        )}
        <button className="home-button" onClick={handleHomeClick}>
          <Home />
        </button>
        <h1>Вхід до кабінету</h1>
        <form className="sign-in-form" onSubmit={handleFormSubmit}>
          <div className="input-group">
            <div className="input-sign-in">
              <Email className="input-icon-sign-in" />
              <input
                required
                type="email"
                name="email"
                value={email}
                onChange={handleEmailChange}
                placeholder="Введіть електронну пошту"
                disabled={loading}
              />
            </div>
            <div className="input-sign-in">
              <KeyIcon className="input-icon-sign-in" />
              <input
                required
                type={showPassword ? "text" : "password"}
                name="password"
                value={password}
                onChange={handlePasswordChange}
                placeholder="Введіть пароль"
                disabled={loading}
              />
              <button
                type="button"
                className="password-toggle"
                onClick={togglePasswordVisibility}
                disabled={loading}
              >
                {showPassword ? <EyeClosed /> : <EyeOpen />}
              </button>
            </div>
          </div>

          <button 
            className="sign-in-confirm-button" 
            type="submit" 
            disabled={loading}
            style={{ cursor: loading ? 'not-allowed' : 'pointer' }}
          >
            {loading ? "Завантаження..." : "Ввійти"}
          </button>
        </form>
        <p className="sign-in-note">
          Не зареєстровані? <a href="/signUp">Зробіть це зараз</a>
        </p>
      </div>
    </div>
  );
}

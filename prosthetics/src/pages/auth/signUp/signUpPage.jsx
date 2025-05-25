import { useState } from "react";
import {
  ArrowCircleDown,
} from "@mui/icons-material";
import { useSignUp } from "../signUp/hooks/useSignUp";
import Phone from "../../../assets/phone-white.svg?react";
import Email from "../../../assets/email-white.svg?react";
import Key from "../../../assets/key.svg?react";
import Person from "../../../assets/person-white.svg?react";
import Date from "../../../assets/date-white.svg?react";
import EyeOpen from "../../../assets/eye.svg?react";
import EyeClosed from "../../../assets/eye-close.svg?react";
import Home from "../../../assets/home.svg?react";
import { useNavigate } from "react-router-dom";
import SnackbarAlert from "../../../common/components/SnackbarAlert";
import { CircularProgress } from "@mui/material";
import "./signUpStyles.css";

export default function SignUpPage() {
  const [step, setStep] = useState(1);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    name: "",
    phone: "",
    birthDate: "",
  });
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "error"
  });
  const navigate = useNavigate();

  const { handleRegister, loading, error } = useSignUp();

  const handleHomeClick = () => {
    navigate('/');
  };

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
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

  const validateStep1 = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email) {
      showError("Введіть електронну пошту");
      return false;
    }
    if (!emailRegex.test(formData.email)) {
      showError("Введіть правильний формат електронної пошти");
      return false;
    }
    if (!formData.password) {
      showError("Введіть пароль");
      return false;
    }
    if (formData.password.length < 6) {
      showError("Пароль має бути не менше 6 символів");
      return false;
    }
    if (!/[A-Z]/.test(formData.password)) {
      showError("Пароль має містити хоча б одну велику літеру");
      return false;
    }
    if (!/[a-z]/.test(formData.password)) {
      showError("Пароль має містити хоча б одну малу літеру");
      return false;
    }
    if (!/[0-9]/.test(formData.password)) {
      showError("Пароль має містити хоча б одну цифру");
      return false;
    }
    return true;
  };

  const validateStep2 = () => {
    if (!formData.name) {
      showError("Введіть ПІБ");
      return false;
    }
    if (formData.name.length < 3 || formData.name.length > 255) {
      showError("ПІБ має бути від 3 до 255 символів");
      return false;
    }
    if (!formData.phone) {
      showError("Введіть номер телефону");
      return false;
    }
    if (!/^\+?[0-9]{10,15}$/.test(formData.phone)) {
      showError("Телефон має містити 10–15 цифр і може починатись з '+'");
      return false;
    }
    if (!formData.birthDate) {
      showError("Введіть дату народження");
      return false;
    }
    return true;
  };

  const handleNext = (e) => {
    e.preventDefault();
    if (validateStep1()) {
      setStep(2);
    }
  };

  const handleBack = () => {
    setStep(1);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateStep2()) {
      const result = await handleRegister(
        formData.name,
        formData.phone,
        formData.email,
        formData.password,
        formData.birthDate
      );
      
      if (!result.success) {
        showError(result.error || "Помилка при реєстрації");
      }
    }
  };

  return (
    <div className="sign-up-page">
      <SnackbarAlert
        open={snackbar.open}
        onClose={handleCloseSnackbar}
        message={snackbar.message}
        severity={snackbar.severity}
        autoHideDuration={5000}
      />

      <div className="sign-up-form-container">
        {loading && (
          <div className="loading-overlay">
            <CircularProgress style={{ color: '#73A965' }} />
          </div>
        )}
        <button className="home-button" onClick={handleHomeClick}>
          <Home />
        </button>
        {(step === 2 || step === 3) && (
          <button
            type="button"
            onClick={handleBack}
            className="back-icon-button"
            disabled={loading}
          >
            <ArrowCircleDown className="rotated-icon" />
          </button>
        )}
        <h1>Реєстрація</h1>
        <div className="step-progress">
          {/* Step 1 */}
          <div className="step">
            <div className="step-container">
              <div className="circle-outer">
                <div
                  className={`circle-inner ${step > 1 ? "done" : "pending"}`}
                >
                  <span className="checkmark">✔</span>
                </div>
              </div>
              <div className={`line ${step >= 2 ? "active" : ""}`}></div>
            </div>
            <div className="step-text">
              <p className="step-text-title">Крок 1</p>
              <p className="step-text-info">Логін та пароль</p>
            </div>
          </div>

          {/* Step 2 */}
          <div className="step">
            <div className="step-container">
              <div className="circle-outer">
                <div
                  className={`circle-inner ${step === 3 ? "done" : "pending"}`}
                >
                  <span className="checkmark">✔</span>
                </div>
              </div>
              <div className={`line ${step >= 3 ? "active" : ""}`}></div>
            </div>
            <div className="step-text">
              <p className="step-text-title">Крок 2</p>
              <p className="step-text-info">Особиста інформація</p>
            </div>
          </div>
        </div>

        {step === 1 ? (
          <form className="sign-up-form" onSubmit={handleNext}>
            <div className="input-group">
              <div className="input">
                <Email className="input-icon" />
                <input
                  type="email"
                  name="email"
                  placeholder="Введіть електронну пошту"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  disabled={loading}
                />
              </div>
              <div className="input">
                <Key className="input-icon" />
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="Введіть пароль до кабінету"
                  value={formData.password}
                  onChange={handleChange}
                  required
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
              type="submit" 
              className="sign-up-button"
              disabled={loading}
            >
              Далі
            </button>
          </form>
        ) : (
          <form className="sign-up-form" onSubmit={handleSubmit}>
            <div className="input-group">
              <div className="input">
                <Person className="input-icon" />
                <input
                  type="text"
                  name="name"
                  placeholder="Введіть ПІБ"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  disabled={loading}
                />
              </div>
              <div className="input">
                <Phone className="input-icon" />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Введіть номер телефону"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  disabled={loading}
                />
              </div>
              <div className="input">
                <Date className="input-icon" />
                <input
                  type="date"
                  name="birthDate"
                  placeholder="Введіть дату народження"
                  value={formData.birthDate}
                  onChange={handleChange}
                  required
                  disabled={loading}
                />
              </div>
            </div>
            <button 
              type="submit" 
              className="sign-up-button"
              disabled={loading}
            >
              {loading ? "Реєстрація..." : "Зареєструватися"}
            </button>
          </form>
        )}
        <p className="sign-up-note">
          Вже зареєстровані? <a href="/signIn">Увійдіть</a>
        </p>
      </div>
    </div>
  );
}

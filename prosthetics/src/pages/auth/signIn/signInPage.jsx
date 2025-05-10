import React, { useState } from "react";
import { useSignIn } from "./hooks/useSignIn";
import { Email } from "@mui/icons-material";
import WarningIcon from '@mui/icons-material/Warning';
import KeyIcon from "@mui/icons-material/Key";
import "./signInStyles.css";

export default function SignInPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [validationError, setValidationError] = useState("");

  const { loading, error, handleSubmit } = useSignIn();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const validateForm = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setValidationError("Введіть правильний формат електронної пошти.");
      return false;
    }
    if (password.length < 6) {
      setValidationError("Пароль має містити мінімум 6 символів.");
      return false;
    }
    setValidationError("");
    return true;
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    handleSubmit(email, password);
  };

  return (
    <div className="sign-in-page">
      <div className="sign-in-form-container">
        <h1>Вхід до кабінету</h1>
        <form className="sign-in-form" onSubmit={handleFormSubmit}>
          <div className="input-group">
            <div className="input">
              <Email className="input-icon" />
              <input
                required
                type="email"
                name="email"
                value={email}
                onChange={handleEmailChange}
                placeholder="Введіть електронну пошту"
              />
            </div>
            <div className="input">
              <KeyIcon className="input-icon" />
              <input
                required
                type="password"
                name="password"
                value={password}
                onChange={handlePasswordChange}
                placeholder="Введіть пароль"
              />
            </div>
          </div>

          {validationError && (
            <p className="error-message">
              <WarningIcon className="error-icon" />
              {validationError}
            </p>
          )}
          {error && (
            <p className="error-message">
              <WarningIcon className="error-icon" />
              {error}
            </p>
          )}

          <button type="submit" disabled={loading}>
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

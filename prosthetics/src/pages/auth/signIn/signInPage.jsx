import React, { useState } from "react";
import { useSignIn } from "./hooks/useSignIn";
import { Email } from "@mui/icons-material";
import KeyIcon from "@mui/icons-material/Key";
import "./signInStyles.css";

export default function SignInPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { loading, error, handleSubmit } = useSignIn();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
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
          <button type="submit">Ввійти</button>
        </form>
        <p className="sign-in-note">
          Не зареєстровані? <a href="/signUp">Зробіть це зараз</a>
        </p>
      </div>
    </div>
  );
}

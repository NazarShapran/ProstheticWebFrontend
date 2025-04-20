import React from "react";
import { Email } from "@mui/icons-material";
import KeyIcon from "@mui/icons-material/Key";
import "./signInStyles.css";

export default function SignInPage() {
  return (
    <div className="sign-in-page">
      <div className="sign-in-form-container">
        <h1>Вхід до кабінету</h1>
        <form className="sign-in-form">
          <div className="input-group">
            <div className="input">
              <Email className="input-icon" />
              <input type="email" placeholder="Введіть електронну пошту" />
            </div>
            <div className="input">
              <KeyIcon className="input-icon" />
              <input type="password" placeholder="Введіть пароль до кабінету" />
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

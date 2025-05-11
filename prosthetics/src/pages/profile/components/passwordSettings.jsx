import React, { useState } from "react";
import LockIcon from "@mui/icons-material/Lock";
import { userUserFromLocalStorage } from "../hooks/userUserFromLocalStorage";

const ChangePassword = ({ onSubmit }) => {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");
  const user = userUserFromLocalStorage();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newPassword !== confirmNewPassword) {
      alert("Нові паролі не збігаються!");
      return;
    }
    if (onSubmit) onSubmit({ currentPassword, newPassword });
  };

  return (
    <div className="profile-section change-password">
      <h3>Налаштування кабінету</h3>
      <h4>Зміна пароля</h4>
      <form onSubmit={handleSubmit}>
        <div className="profile-section-content">
          <div className="column">
            <div className="input-wrapper">
              <label>Введіть поточний пароль</label>
              <div className="input-with-icon">
                <LockIcon className="input-icon" />
                <input
                  type="password"
                  value={currentPassword}
                  onChange={(e) => setCurrentPassword(e.target.value)}
                  placeholder="Введіть поточний пароль"
                />
              </div>
            </div>
          </div>
          <div className="column">
            <div className="input-wrapper">
              <label>Введіть новий пароль</label>
              <div className="input-with-icon">
                <LockIcon className="input-icon" />
                <input
                  type="password"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  placeholder="Введіть новий пароль"
                />
              </div>
            </div>
            <div className="input-wrapper">
              <label>Підтвердіть новий пароль</label>
              <div className="input-with-icon">
                <LockIcon className="input-icon" />
                <input
                  type="password"
                  value={confirmNewPassword}
                  onChange={(e) => setConfirmNewPassword(e.target.value)}
                  placeholder="Підтвердіть новий пароль"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="button-group">
          <button type="submit">Змінити</button>
        </div>
      </form>
    </div>
  );
};

export default ChangePassword;
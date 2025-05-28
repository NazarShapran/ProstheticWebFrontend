import React, { useState } from "react";
import Key from "../../../assets/key-green.svg?react";
import EditIcon from "../../../assets/edit.svg?react";
import { userUserFromLocalStorage } from "../hooks/userUserFromLocalStorage";
import { useUpdatePassword } from "../hooks/useUpdatePassword";

const ChangePassword = () => {
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");
  const { updatePassword, loading, error } = useUpdatePassword();
  const user = userUserFromLocalStorage();

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (newPassword !== confirmNewPassword) {
      alert("Нові паролі не збігаються!");
      return;
    }

    const result = await updatePassword({ newPassword });
    if (result.success) {
      setNewPassword("");
      setConfirmNewPassword("");
    }
  };

  return (
    <div className="profile-section change-password">
      <div className="profile-section-header">
        <h3>Налаштування кабінету</h3>
        <div className="button-group">
          <button
            type="submit"
            disabled={loading}
            className="edit-btn"
          >
            <EditIcon />
            {loading ? "Збереження..." : "Змінити пароль"}
          </button>
        </div>
      </div>
      {error?.general && <div className="error-message">{error.general}</div>}
      <form id="change-password-form" onSubmit={handleSubmit}>
        <div className="profile-section-content">
          <div className="column">
            <div className="input-wrapper">
              <label>Введіть новий пароль</label>
              <div className="input-with-icon">
                <Key className="input-icon" />
                <input
                  type="password"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  placeholder="Введіть новий пароль"
                />
              </div>
              {error?.password && <div className="error-message">{error.password}</div>}
            </div>
          </div>
          <div className="column">
            <div className="input-wrapper">
              <label>Підтвердіть новий пароль</label>
              <div className="input-with-icon">
                <Key className="input-icon" />
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
      </form>
    </div>
  );
};

export default ChangePassword;
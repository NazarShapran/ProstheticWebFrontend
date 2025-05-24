import React, { useState } from "react";
import LockIcon from "@mui/icons-material/Lock";
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
      <div className="profile-section-header-change-password">
        <h3>Налаштування кабінету</h3>
        <h4 className="change-password-title">Зміна пароля</h4>
      </div>
      {error?.general && <div className="error-message">{error.general}</div>}
      <form onSubmit={handleSubmit}>
        <div className="profile-section-content">
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
              {error?.password && <div className="error-message">{error.password}</div>}
            </div>
          </div>
          <div className="column">
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
          <button type="submit" disabled={loading}>
            {loading ? "Збереження..." : "Змінити пароль"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default ChangePassword;
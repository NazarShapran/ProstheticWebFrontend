import React, { useState } from "react";

const ChangePassword = ({ onChangePassword }) => {
  const [current, setCurrent] = useState("");
  const [newPass, setNewPass] = useState("");
  const [confirm, setConfirm] = useState("");

  const handleSubmit = () => {
    onChangePassword(current, newPass, confirm);
  };

  return (
    <div className="profile-section change-password">
      <h3>Зміна пароля</h3>
      <input
        type="password"
        placeholder="Введіть поточний пароль"
        value={current}
        onChange={(e) => setCurrent(e.target.value)}
      />
      <input
        type="password"
        placeholder="Введіть новий пароль"
        value={newPass}
        onChange={(e) => setNewPass(e.target.value)}
      />
      <input
        type="password"
        placeholder="Підтвердіть новий пароль"
        value={confirm}
        onChange={(e) => setConfirm(e.target.value)}
      />
      <button onClick={handleSubmit}>Змінити</button>
    </div>
  );
};

export default ChangePassword;

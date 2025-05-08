import React from "react";
import { useUserFromLocalStorage } from "../hooks/useUserFromLocalStorage";
import { useLogout } from "../hooks/useLogout";

const PersonalInfo = ({ onEdit }) => {
  const user = useUserFromLocalStorage();
  const logout = useLogout();

  return (
    <div className="profile-section personal-info">
      <h3>Особиста інформація</h3>
      <p>ПІБ: {user.given_name}</p>
      <p>Телефон: {user.phone_number}</p>
      <p>Дата народження: {user.birthdate}</p>
      <p>Пошта: {user.email}</p>
      <button className="edit-btn" onClick={onEdit}>
        Змінити
      </button>
      <button className="logout-btn" onClick={logout}>
        Вийти
      </button>
    </div>
  );
};

export default PersonalInfo;

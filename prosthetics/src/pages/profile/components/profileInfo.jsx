import React from "react";
import { userUserFromLocalStorage } from "../hooks/userUserFromLocalStorage";
import { useLogout } from "../hooks/useLogout";
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import MarkunreadIcon from '@mui/icons-material/Markunread';

const PersonalInfo = ({ onEdit }) => {
  const user = userUserFromLocalStorage();
  const logout = useLogout();

  return (
    <div className="profile-section">
      <h3>Особиста інформація</h3>
      <div className="profile-section-content">
        <div className="column">
          <div className="input-wrapper">
            <label>ПІБ:</label>
            <div className="input-with-icon">
              <PersonOutlineIcon className="input-icon" />
              <input type="text" value={user.given_name || ""} readOnly />
            </div>
          </div>
          <div className="input-wrapper">
            <label>Телефон:</label>
            <div className="input-with-icon">
              <LocalPhoneIcon className="input-icon" />
              <input type="text" value={user.phone_number || ""} readOnly />
            </div>
          </div>
        </div>
        <div className="column">
          <div className="input-wrapper">
            <label>Дата народження:</label>
            <div className="input-with-icon">
              <CalendarMonthIcon className="input-icon" />
              <input type="text" value={user.birthdate || ""} readOnly />
            </div>
          </div>
          <div className="input-wrapper">
            <label>Пошта:</label>
            <div className="input-with-icon">
              <MarkunreadIcon className="input-icon" />
              <input type="email" value={user.email || ""} readOnly />
            </div>
          </div>
        </div>
      </div>
      <div className="button-group">
        <button className="edit-btn" onClick={onEdit}>
          Змінити
        </button>
        <button className="logout-btn" onClick={logout}>
          Вийти
        </button>
      </div>
    </div>
  );
};

export default PersonalInfo;
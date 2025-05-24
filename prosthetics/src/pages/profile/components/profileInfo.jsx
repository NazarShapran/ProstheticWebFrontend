import React, { useState } from "react";
import { userUserFromLocalStorage } from "../hooks/userUserFromLocalStorage";
import { useLogout } from "../hooks/useLogout";
import { useUpdateUserDetails } from "../hooks/useUpdateUserDetails";
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import MarkunreadIcon from '@mui/icons-material/Markunread';

const PersonalInfo = () => {
  const user = userUserFromLocalStorage();
  const logout = useLogout();
  const [isEditing, setIsEditing] = useState(false);
  const {
    formValues,
    loading,
    showAlert,
    alertMessage,
    handleChange,
    updateUserDetails,
    resetForm,
    setShowAlert
  } = useUpdateUserDetails();

  const handleSubmit = async () => {
    const result = await updateUserDetails(formValues);
    if (result.success) {
      setIsEditing(false);
    }
  };

  const handleCancel = () => {
    resetForm();
    setIsEditing(false);
  };

  const inputStyle = !isEditing ? {
    pointerEvents: 'none',
    backgroundColor: '#f5f5f5',
    color: '#666'
  } : {};

  return (
    <div className="profile-section">
      <h3>Особиста інформація</h3>
      {showAlert && <div className={`alert ${alertMessage.includes('успішно') ? 'success' : 'error'}`}>
        {alertMessage}
      </div>}
      <div className="profile-section-content">
        <div className="column">
          <div className="input-wrapper">
            <label>ПІБ:</label>
            <div className="input-with-icon">
              <PersonOutlineIcon className="input-icon" />
              <input
                type="text"
                name="fullName"
                value={formValues.fullName}
                onChange={handleChange}
                readOnly={!isEditing}
                style={inputStyle}
              />
            </div>
          </div>
          <div className="input-wrapper">
            <label>Телефон:</label>
            <div className="input-with-icon">
              <LocalPhoneIcon className="input-icon" />
              <input
                type="text"
                name="phoneNumber"
                value={formValues.phoneNumber}
                onChange={handleChange}
                readOnly={!isEditing}
                style={inputStyle}
              />
            </div>
          </div>
        </div>
        <div className="column">
          <div className="input-wrapper">
            <label>Дата народження:</label>
            <div className="input-with-icon">
              <CalendarMonthIcon className="input-icon" />
              <input
                type="text"
                name="birthDate"
                value={formValues.birthDate}
                onChange={handleChange}
                placeholder="DD.MM.YYYY"
                readOnly={!isEditing}
                style={inputStyle}
              />
            </div>
          </div>
          <div className="input-wrapper">
            <label>Пошта:</label>
            <div className="input-with-icon">
              <MarkunreadIcon className="input-icon" />
              <input
                type="email"
                name="email"
                value={formValues.email}
                onChange={handleChange}
                readOnly={!isEditing}
                style={inputStyle}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="button-group">
        {!isEditing ? (
          <>
            <button className="edit-btn" onClick={() => setIsEditing(true)}>
              Змінити
            </button>
            <button className="logout-btn" onClick={logout}>
              Вийти
            </button>
          </>
        ) : (
          <>
            <button 
              className="save-btn" 
              onClick={handleSubmit}
              disabled={loading}
            >
              {loading ? "Збереження..." : "Зберегти"}
            </button>
            <button 
              className="cancel-btn" 
              onClick={handleCancel}
              disabled={loading}
            >
              Скасувати
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default PersonalInfo;
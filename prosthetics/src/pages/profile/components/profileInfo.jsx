import React, { useState } from "react";
import { userUserFromLocalStorage } from "../hooks/userUserFromLocalStorage";
import { useLogout } from "../hooks/useLogout";
import { useUpdateUserDetails } from "../hooks/useUpdateUserDetails";
import { CircularProgress } from "@mui/material";
import Person from "../../../assets/person-green.svg?react";
import Phone from "../../../assets/phone.svg?react";
import Date from "../../../assets/date.svg?react";
import Email from "../../../assets/email.svg?react";
import Edit from "../../../assets/edit.svg?react";
import Exit from "../../../assets/exit.svg?react";
import Cancel from "../../../assets/cancel.svg?react";
import Confirm from "../../../assets/confirm.svg?react";

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
    setShowAlert,
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

  const inputStyle = !isEditing
    ? {
        pointerEvents: "none",
        backgroundColor: "#f5f5f5",
        color: "#666",
      }
    : {};

  return (
    <div className="profile-section">
      {loading && (
        <div className="loading-overlay">
          <CircularProgress style={{ color: '#73A965' }} />
        </div>
      )}
      <div className="profile-section-header">
        <h3>Особиста інформація</h3>
        {showAlert && (
          <div
            className={`alert ${
              alertMessage.includes("успішно") ? "success" : "error"
            }`}
          >
            {alertMessage}
          </div>
        )}
        <div className="profile-section-button-group">
          {!isEditing ? (
            <>
              <Edit className="edit-btn" onClick={() => setIsEditing(true)} />
              <Exit className="logout-btn" onClick={logout} />
            </>
          ) : (
            <>
              <Confirm 
                className="confirm-btn" 
                onClick={handleSubmit}
                style={{ cursor: loading ? 'not-allowed' : 'pointer' }}
              />
              <Cancel 
                className="cancel-btn" 
                onClick={handleCancel}
                style={{ cursor: loading ? 'not-allowed' : 'pointer' }}
              />
            </>
          )}
        </div>
      </div>

      <div className="profile-section-content">
        <div className="column">
          <div className="input-wrapper">
            <label>ПІБ:</label>
            <div className="input-with-icon">
              <Person className="input-icon" />
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
              <Phone className="input-icon" />
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
              <Date className="input-icon" />
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
              <Email className="input-icon" />
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
    </div>
  );
};

export default PersonalInfo;

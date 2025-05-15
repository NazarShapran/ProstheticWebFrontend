import React, { useState } from "react";
import PersonalInfo from "./components/profileInfo";
import SubmittedApplications from "./components/submittedApplications";
import ChangePassword from "./components/passwordSettings";
import DeleteAccount from "./components/profileDelete";
import "./profileStyles.css";

const ProfilePage = () => {
  const [activeTab, setActiveTab] = useState("personal"); // Default tab

  const tabs = [
    { id: "personal", label: "Особиста інформація", component: <PersonalInfo /> },
    { id: "applications", label: "Подані заявки", component: <SubmittedApplications /> },
    { id: "password", label: "Змінити пароль", component: <ChangePassword /> },
    { id: "delete", label: "Видалити акаунт", component: <DeleteAccount /> },
  ];

  return (
    <div className="profile-page">
      <div className="profile-tabs">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`tab-button ${activeTab === tab.id ? "active" : ""}`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="tab-content">
        {tabs.find(tab => tab.id === activeTab)?.component}
      </div>
    </div>
  );
};

export default ProfilePage;

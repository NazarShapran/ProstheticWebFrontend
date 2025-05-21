import React, { useState } from "react";
import PersonalInfo from "./components/profileInfo";
import SubmittedApplications from "./components/submittedApplications";
import ChangePassword from "./components/passwordSettings";
import DeleteAccount from "./components/profileDelete";
import "./profileStyles.css";

// Import icons
import personIcon from "../../assets/person.svg";
import listIcon from "../../assets/list.svg";
import settingsIcon from "../../assets/account-setting.svg";

const ProfilePage = () => {
  const [activeTab, setActiveTab] = useState("cabinet"); // Default tab

  const tabs = [
    { 
      id: "cabinet", 
      label: "Кабінет", 
      icon: personIcon,
      component: <PersonalInfo /> 
    },
    { 
      id: "applications", 
      label: "Подані заявки", 
      icon: listIcon,
      component: <SubmittedApplications /> 
    },
    { 
      id: "settings", 
      label: "Налаштування", 
      icon: settingsIcon,
      component: (
        <div className="settings-container">
          <ChangePassword />
          <DeleteAccount />
        </div>
      ) 
    },
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
            <img src={tab.icon} alt={tab.label} className="tab-icon" />
            <span>{tab.label}</span>
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

import React from "react";
import PersonalInfo from "./components/profileInfo";
import SubmittedApplications from "./components/submittedApplications";
import ChangePassword from "./components/passwordSettings";
import DeleteAccount from "./components/profileDelete";
import "./profileStyles.css";

const ProfilePage = () => {
  return (
    <div className="profile-page">
      <PersonalInfo />
      <SubmittedApplications />
      <ChangePassword />
      <DeleteAccount />
    </div>
  );
};

export default ProfilePage;

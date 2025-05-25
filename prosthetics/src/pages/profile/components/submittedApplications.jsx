import React from "react";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CancelIcon from "@mui/icons-material/Cancel";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import { CircularProgress } from "@mui/material";
import { useGetRequestsByUserId } from "../hooks/useGetRequestsByUserId";
import { userUserFromLocalStorage } from "../../profile/hooks/userUserFromLocalStorage";
import EmptyBro from "../../../assets/Empty-bro.svg?react";

const SubmittedApplications = () => {
  const user = userUserFromLocalStorage();
  const { requests, loading, error } = useGetRequestsByUserId(user?.sub);

  const getStatusIcon = (statusTitle) => {
    switch (statusTitle) {
      case "Затверджено":
        return <CheckCircleIcon className="status-icon approved" sx={{ fontSize: 28 }} />;
      case "В обробці":
        return <AccessTimeIcon className="status-icon pending" sx={{ fontSize: 28 }} />;
      case "Відхилено":
        return <CancelIcon className="status-icon rejected" sx={{ fontSize: 28 }} />;
      default:
        return null;
    }
  };

  if (loading) {
    return (
      <div className="loading-container">
        <CircularProgress style={{ color: '#73A965' }} />
        <p>Завантаження заявок...</p>
      </div>
    );
  }

  if (requests.length === 0) {
    return (
      <div className="empty-state">
        <EmptyBro className="empty-illustration" />
        <h3>У вас ще немає заявок</h3>
        <p className="empty-text">
          Не гайте часу! Подайте заявку на протез прямо зараз і зробіть перший крок до покращення якості вашого життя. 
          Наша команда готова допомогти вам у цьому важливому рішенні.
        </p>
        <button className="primary-button" onClick={() => window.location.href = '/form'}>
          Подати заявку
        </button>
      </div>
    );
  }

  return (
    <div className="profile-section applications">
      <h3 className="profile-section-header">Подані заявки</h3>
      {requests.map((app, index) => (
        <div key={index} className="application-item">
          <div className="application-details">
            <span className="application-title">{app.prosthetic.title}</span>
            <div className="date-status-group">
              <span className="application-date">{new Date(app.date).toLocaleDateString()}</span>
              <div className="application-status">
                {getStatusIcon(app.status.title)}
                <span className="status-text">{app.status.title}</span>
              </div>
            </div>
          </div>
          <hr className="application-divider" />
        </div>
      ))}
    </div>
  );
};

export default SubmittedApplications;

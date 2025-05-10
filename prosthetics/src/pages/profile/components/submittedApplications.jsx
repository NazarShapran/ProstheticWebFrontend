import React from "react";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CancelIcon from "@mui/icons-material/Cancel";
import AccessTimeIcon from "@mui/icons-material/AccessTime";

const SubmittedApplications = () => {
  const applications = [
    { title: "Заявка на протез Arm-x", date: "12.02.2025", status: "approved" },
    { title: "Заявка на протез Leg carbon fiber", date: "12.02.2025", status: "pending" },
    { title: "Заявка на протез Arm pro", date: "12.02.2025", status: "rejected" },
  ];

  const getStatusIcon = (status) => {
    switch (status) {
      case "approved":
        return <CheckCircleIcon className="status-icon approved" sx={{ fontSize: 28 }} />;
      case "pending":
        return <AccessTimeIcon className="status-icon pending" sx={{ fontSize: 28 }} />;
      case "rejected":
        return <CancelIcon className="status-icon rejected" sx={{ fontSize: 28 }} />;
      default:
        return null;
    }
  };

  return (
    <div className="profile-section applications">
      <h3>Подані заявки</h3>
      {applications.map((app, index) => (
        <div key={index} className="application-item">
          <div className="application-details">
            <span className="application-title">{app.title}</span>
            <div className="date-status-group">
              <span className="application-date">{app.date}</span>
              <div className="application-status">{getStatusIcon(app.status)}</div>
            </div>
          </div>
          <hr className="application-divider" />
        </div>
      ))}
    </div>
  );
};

export default SubmittedApplications;
import React from "react";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CancelIcon from "@mui/icons-material/Cancel";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import { useGetRequestsByUserId } from "../hooks/useGetRequestsByUserId";
import { userUserFromLocalStorage } from "../../profile/hooks/userUserFromLocalStorage";

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

  if (loading) return <p>Завантаження заявок...</p>;
  if (error) return <p>Помилка при завантаженні заявок</p>;
  if (requests.length === 0) return <p>У вас ще немає заявок</p>;

  return (
    <div className="profile-section applications">
      <h3>Подані заявки</h3>
      {requests.map((app, index) => (
        <div key={index} className="application-item">
          <div className="application-details">
            <span className="application-title">{app.prosthetic.title}</span>
            <div className="date-status-group">
              <span className="application-date">{new Date(app.createdAt).toLocaleDateString()}</span>
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

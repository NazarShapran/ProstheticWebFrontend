import React from "react";

const SubmittedApplications = () => {
  const applications = [
    { title: "Заявка на протез", date: "01.05.2025", status: "pending" },
    { title: "Заявка на консультацію", date: "20.04.2025", status: "approved" },
    { title: "Заявка на ремонт", date: "15.03.2025", status: "rejected" },
  ];

  return (
    <div className="profile-section applications">
      <h3>Подані заявки</h3>
      {applications.map((app, index) => (
        <div key={index} className="application-item">
          <div>
            <strong>{app.title}</strong>
            <p>{app.date}</p>
          </div>
          <span className={`status-icon ${app.status}`}></span>
          {index < applications.length - 1 && <hr />}
        </div>
      ))}
    </div>
  );
};

export default SubmittedApplications;

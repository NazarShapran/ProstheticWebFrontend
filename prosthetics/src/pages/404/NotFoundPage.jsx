import React from "react";
import { useNavigate } from "react-router-dom";
import "./notFoundPageStyles.css"; 

const NotFoundPage = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <div className="not-found-page">
      <h1>404 - Page Not Found</h1>
      <p>The page you are looking for does not exist.</p>
      <button onClick={handleGoBack}>Go back</button>
    </div>
  );
};

export default NotFoundPage;

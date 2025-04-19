import React from "react";

const StoryCard = ({ title, text, imageUrl }) => {
  return (
    <div className="story-card">
      <img src={imageUrl} alt={title} className="story-image" />
      <div className="story-content">
        <h3>{title}</h3>
        <p>{text}</p>
        <button className="read-more">Читати далі</button>
      </div>
    </div>
  );
};

export default StoryCard;

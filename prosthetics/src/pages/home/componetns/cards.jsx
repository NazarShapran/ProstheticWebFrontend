import React from "react";

const StoryCard = ({ title, text, imageUrl, articleUrl }) => {
  const handleReadMore = () => {
    window.open(articleUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="story-card">
      <img src={imageUrl} alt={title} className="story-image" />
      <div className="story-content">
        <h3>{title}</h3>
        <p>{text}</p>
        <button 
          className="read-more" 
          onClick={handleReadMore}
          disabled={!articleUrl}
        >
          Читати далі
        </button>
      </div>
    </div>
  );
};

export default StoryCard;
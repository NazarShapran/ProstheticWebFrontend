import React from 'react';
import '../styles/Reviews.css';

const ReviewCard = ({ review }) => {
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('uk-UA', {
      day: '2-digit',
      month: 'long',
      year: 'numeric'
    }).format(date);
  };

  return (
    <div className="review-card">
      <div className="review-header">
        <div className="review-user-info">
          <h3 className="review-user-name">{review.user.fullName}</h3>
          <span className="review-date">{formatDate(review.date)}</span>
        </div>
      </div>

      <div className="review-content">
        <p className="review-text">{review.description}</p>
        
        {review.pros && (
          <div className="review-section">
            <h4>Переваги:</h4>
            <p className="review-list-item positive">{review.pros}</p>
          </div>
        )}

        {review.cons && (
          <div className="review-section">
            <h4>Недоліки:</h4>
            <p className="review-list-item negative">{review.cons}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ReviewCard; 
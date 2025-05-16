import React from 'react';
import smileIcon from '../../../assets/smile-icon.svg';
import sadIcon from '../../../assets/sad-icon.svg';
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
    <div className="review-wrapper">
      <div className="review-user-info">
        <h3 className="review-user-name">{review.user.fullName}</h3>
        <span className="review-date">{formatDate(review.date)}</span>
      </div>

      <div className="review-card">
        <div className="review-content">
          <p className="review-text">{review.description}</p>
          
          {review.pros && (
            <div className="review-section">
              <h4>Переваги</h4>
              <div className="review-list-item positive">
                <img src={smileIcon} alt="Переваги" className="review-icon" />
                <p>{review.pros}</p>
              </div>
            </div>
          )}

          {review.cons && (
            <div className="review-section">
              <h4>Недоліки</h4>
              <div className="review-list-item negative">
                <img src={sadIcon} alt="Недоліки" className="review-icon" />
                <p>{review.cons}</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ReviewCard; 
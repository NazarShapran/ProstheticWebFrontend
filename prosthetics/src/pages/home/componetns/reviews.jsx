import React from 'react';
import './reviewsStyles.css';
import quoteIcon from '../../../common/svgs/tabler_quote-filled.svg';
import { useGetAllReviews } from '../hooks/useGetAllReviews';

const MAX_DESCRIPTION_LENGTH = 250;

const truncateText = (text, maxLength) => {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength) + '...';
};

const formatDate = (dateString) => {
  const date = new Date(dateString);
  return new Intl.DateTimeFormat('uk-UA', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric'
  }).format(date);
};

const Reviews = () => {
  const { reviews, loading, error } = useGetAllReviews(6);

  if (loading) {
    return (
      <section className="home-reviews-container">
        <h2 className="home-reviews-title">Відгуки наших користувачів</h2>
        <div className="home-reviews-grid">
          <p>Завантаження відгуків...</p>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="home-reviews-container">
        <h2 className="home-reviews-title">Відгуки наших користувачів</h2>
        <div className="home-reviews-grid">
          <p>Помилка завантаження відгуків: {error}</p>
        </div>
      </section>
    );
  }

  const firstRowReviews = reviews.slice(0, 3);
  const secondRowReviews = reviews.slice(3, 6);

  return (
    <section className="home-reviews-container">
      <h2 className="home-reviews-title">Відгуки наших користувачів</h2>
      <div className="home-reviews-grid">
        <div className="home-reviews-row">
          {firstRowReviews.map((review) => (
            <div key={review.id} className="home-review-card home-review-card-bg-1">
              <div className="home-review-content">
                <p className="home-review-text">
                  {truncateText(review.description, MAX_DESCRIPTION_LENGTH)}
                </p>
                <div className="home-review-footer">
                  <p className="home-review-author">{review.user.fullName}</p>
                  <p className="home-review-date">{formatDate(review.date)}</p>
                </div>
              </div>
              <div className="home-review-quote-icon">
                <img src={quoteIcon} alt="quote" />
              </div>
            </div>
          ))}
        </div>
        <div className="home-reviews-row">
          {secondRowReviews.map((review) => (
            <div key={review.id} className="home-review-card home-review-card-bg-2">
              <div className="home-review-content">
                <div className="home-review-header">
                  <div className="home-review-quote-icon">
                    <img src={quoteIcon} alt="quote" />
                  </div>
                  <div className="home-review-info">
                    <p className="home-review-author">{review.user.fullName}</p>
                    <p className="home-review-date">{formatDate(review.date)}</p>
                  </div>
                </div>
                <p className="home-review-text">
                  {truncateText(review.description, MAX_DESCRIPTION_LENGTH)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews; 
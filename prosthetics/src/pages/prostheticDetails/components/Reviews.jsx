import React from 'react';
import { useGetAllReviewsByProstheticId } from '../hooks/useGetAllReviewsByProstheticId';
import ReviewCard from './ReviewCard';
import ReviewForm from './reviewForm';
import "../styles/Reviews.css";

const Reviews = ({ prostheticId, userId }) => {
  const {
    reviews,
    loading: reviewsLoading,
    error: reviewsError,
    refetch
  } = useGetAllReviewsByProstheticId(prostheticId);

  const handleReviewCreated = async () => {
    await refetch();
  };

  if (reviewsLoading) {
    return <div className="reviews-loading">Завантаження відгуків...</div>;
  }

  if (reviewsError) {
    return <div className="reviews-error">Помилка завантаження відгуків</div>;
  }

  return (
    <div className="reviews-section">
      <ReviewForm
        prostheticId={prostheticId}
        userId={userId}
        onReviewCreated={handleReviewCreated}
      />

      <h2>Відгуки {reviews && reviews.length > 0 && `(${reviews.length})`}</h2>

      {(!reviews || reviews.length === 0) ? (
        <div className="reviews-empty">
          <p>Поки що немає відгуків про цей протез</p>
        </div>
      ) : (
        <div className="reviews-list">
          {reviews.map((review) => (
            <ReviewCard key={review.id} review={review} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Reviews;

import { useState } from 'react';
import { ReviewService } from '../service/reviewService';

export const useCreateReview = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const reviewService = new ReviewService();

  const createReview = async (reviewData) => {
    setLoading(true);
    setError(null);
    
    try {
      const response = await reviewService.createReview(reviewData);
      console.log(response);
      return response;
    } catch (err) {
      setError(err.message || 'Помилка при створенні відгуку');
      throw err;
    } finally {
      setLoading(false);
    }
  };

  return {
    createReview,
    loading,
    error
  };
};

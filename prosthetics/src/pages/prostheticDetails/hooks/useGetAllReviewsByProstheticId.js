import { useState, useEffect } from 'react';
import { ReviewService } from '../service/reviewService';

export const useGetAllReviewsByProstheticId = (prostheticId) => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const reviewService = new ReviewService();
        const data = await reviewService.getReviewsByProstheticId(prostheticId);
        setReviews(data || []);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    if (prostheticId) {
      fetchReviews();
    }
  }, [prostheticId]);

  return { reviews, loading, error };
}; 
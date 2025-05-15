import { useState, useEffect } from 'react';
import { ReviewService } from '../../prostheticDetails/service/reviewService';

export const useGetAllReviews = (limit = 6) => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const controller = new AbortController();
    const fetchReviews = async () => {
      try {
        setLoading(true);
        const reviewService = new ReviewService(controller.signal);
        const response = await reviewService.getAllReviews();
        // Take only the specified number of reviews
        const limitedReviews = response.slice(0, limit);
        setReviews(limitedReviews);
        setError(null);
      } catch (err) {
        if (!controller.signal.aborted) {
          setError(err.message);
        }
      } finally {
        if (!controller.signal.aborted) {
          setLoading(false);
        }
      }
    };

    fetchReviews();

    return () => {
      controller.abort();
    };
  }, [limit]);

  return { reviews, loading, error };
}; 
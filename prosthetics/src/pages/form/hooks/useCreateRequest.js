import { useState } from 'react';
import { RequestService } from '../service/RequestService';

export const useCreateRequest = () => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const requestService = new RequestService();

  const createRequest = async (request) => {
    setLoading(true);
    try {
      const response = await requestService.createRequest(request);
      return response;
    } catch (error) {
      setError(error.message || "Unknown error occurred");
      throw error;
    } finally {
      setLoading(false);
    }
  };

  return { createRequest, error, loading };
};

export default useCreateRequest;
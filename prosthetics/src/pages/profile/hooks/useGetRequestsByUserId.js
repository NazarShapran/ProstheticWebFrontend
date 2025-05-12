import { useEffect, useState } from "react";
import { RequestService } from "../../form/service/RequestService";

export const useGetRequestsByUserId = (userId) => {
  const [requests, setRequests] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!userId) return;

    const controller = new AbortController();
    const service = new RequestService(controller.signal);

    const fetchData = async () => {
      try {
        const data = await service.getRequestsByUserId(userId);
        setRequests(data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();

    return () => controller.abort();
  }, [userId]);

  return { requests, loading, error };
};

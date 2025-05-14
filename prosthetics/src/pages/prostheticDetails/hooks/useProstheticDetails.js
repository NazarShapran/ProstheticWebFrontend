import { useEffect, useState } from "react";
import { ProstheticService } from "../../catalog/service/ProstheticService";

export function useProstheticDetails(id) {
  const [prosthetic, setProsthetic] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProstheticDetails = async () => {
      try {
        const prostheticService = new ProstheticService();
        const data = await prostheticService.getProstheticById(id);
        setProsthetic(data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchProstheticDetails();
    }
  }, [id]);

  return { prosthetic, loading, error };
}

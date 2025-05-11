import { useEffect, useState } from "react";
import { ProstheticService } from "../service/ProstheticService";

export const useGetAllProsthetics = () => {
    const [prosthetics, setProsthetics] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const controller = new AbortController();
        const signal = controller.signal;
        const prostheticService = new ProstheticService(signal);

        const fetchProsthetics = async () => {
            try {
                const response = await prostheticService.getAllProshetics();
                setProsthetics(response);
            } catch (err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        };

        fetchProsthetics();

        return () => {
            controller.abort();
        };
    }, []);
    return { prosthetics, setProsthetics, loading, error };
};


import { useEffect, useState } from "react";
import { ProstheticService } from "../service/ProstheticService";

export const useGetAllProsthetics = () => {
    const [prosthetics, setProsthetics] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [hasMore, setHasMore] = useState(true);
    const pageSize = 6;

    const loadProsthetics = async (page) => {
        try {
            const response = await new ProstheticService().getAllProshetics(page, pageSize);
            if (page === 1) {
                setProsthetics(response.items || []);
            } else {
                setProsthetics(prev => [...prev, ...(response.items || [])]);
            }
            setHasMore((response.items || []).length === pageSize);
        } catch (err) {
            setError(err);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        const controller = new AbortController();
        const signal = controller.signal;
        const prostheticService = new ProstheticService(signal);

        const fetchProsthetics = async () => {
            try {
                const response = await prostheticService.getAllProshetics(1, pageSize);
                setProsthetics(response.items || []);
                setHasMore((response.items || []).length === pageSize);
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

    const loadMore = async () => {
        setLoading(true);
        const nextPage = currentPage + 1;
        await loadProsthetics(nextPage);
        setCurrentPage(nextPage);
    };

    return { prosthetics, setProsthetics, loading, error, hasMore, loadMore };
};


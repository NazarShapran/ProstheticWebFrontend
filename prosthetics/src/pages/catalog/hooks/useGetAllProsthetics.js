import { useEffect, useState } from "react";
import { ProstheticService } from "../service/ProstheticService";

export const useGetAllProsthetics = (loadAll = false) => {
    const [prosthetics, setProsthetics] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [hasMore, setHasMore] = useState(true);
    const pageSize = loadAll ? 1000 : 6;

    const loadProsthetics = async (page) => {
        try {
            const prostheticService = new ProstheticService();
            const response = await prostheticService.getAllProshetics(page, pageSize);
            
            // Ensure response.items exists and is an array
            const items = Array.isArray(response?.items) ? response.items : [];
            
            if (page === 1) {
                setProsthetics(items);
            } else {
                setProsthetics(prev => [...prev, ...items]);
            }
            setHasMore(items.length === pageSize && !loadAll);
            setError(null); // Clear any previous errors
        } catch (err) {
            console.error('Error loading prosthetics:', err);
            setError(err.message || 'Failed to load prosthetics');
            setProsthetics([]); // Reset prosthetics on error
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
                // Ensure response.items exists and is an array
                const items = Array.isArray(response?.items) ? response.items : [];
                setProsthetics(items);
                setHasMore(items.length === pageSize && !loadAll);
                setError(null); // Clear any previous errors
            } catch (err) {
                if (!signal.aborted) {
                    console.error('Error fetching prosthetics:', err);
                    setError(err.message || 'Failed to fetch prosthetics');
                    setProsthetics([]); // Reset prosthetics on error
                }
            } finally {
                if (!signal.aborted) {
                    setLoading(false);
                }
            }
        };

        setLoading(true);
        setError(null);
        fetchProsthetics();

        return () => {
            controller.abort();
        };
    }, [pageSize, loadAll]);

    const loadMore = async () => {
        if (loadAll) return;
        setLoading(true);
        const nextPage = currentPage + 1;
        await loadProsthetics(nextPage);
        setCurrentPage(nextPage);
    };

    return { prosthetics, setProsthetics, loading, error, hasMore, loadMore };
};


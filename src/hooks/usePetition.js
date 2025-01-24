import { useEffect, useState } from "react";
import axios from "axios";

const usePetition = (endpoint) => {
    const API_URL = import.meta.env.VITE_API_URL;
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        setLoading(true);

        axios.get(`${API_URL}${endpoint}`)
            .then(response => {
                setData(response.data.data);
                setLoading(false);
            })
            .catch(() => {
                setLoading(false);
                setError(true);
                console.error("Error fetching data");
            });
    }, [endpoint]);

    return [data, loading, error];
};

export default usePetition;
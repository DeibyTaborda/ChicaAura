import { useState, useEffect } from "react";
import axios from "axios";

function useGet(endpoint) {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [response, setResponse] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
        const token2 = localStorage.getItem('token');
      try {
        setLoading(true);
        const res = await axios.get(endpoint, {
            headers: {
                 Authorization: `Bearer ${token2}`
            }
        });
        setResponse(res.data);
        setError(null);
      } catch (err) {
        setError(err.response?.data || err.message);
        setResponse(null);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [endpoint]);

  const refetch = async () => {
    await fetchData();
  };

  return { response, loading, error, refetch };
};

export default useGet;
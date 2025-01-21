import { useState } from "react";
import axios from 'axios';

export function usePost(url) {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [data, setData] = useState(null); 

    const sendPostRequest = async (data) => {
        setLoading(true);
        setError(null);
        setData(null);
    
        try {
          const response = await axios.post(url, data, {
            headers: {
              'Content-Type': 'application/json',
            },
          });
          setData(response.data);
        } catch (err) {
          setError(err.response?.data || err.message);
        } finally {
          setLoading(false);
        }
      };
    
      return { loading, error, data, sendPostRequest };
}
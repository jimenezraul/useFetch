import { useState, useEffect } from 'react';

const useFetch = (url, method, params) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url, {
          method: method,
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
          body: JSON.stringify(params),
        });

        const res = await response.json();

        setData(res);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchData();
  }, [url, method, params]);

  return { data, loading, error };
};

export default useFetch;

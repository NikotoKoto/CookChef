import { useEffect, useState } from "react";

// Fonction qui permet d'utiliser la data de facon global
export function useFetchData(url, page) {
  const [data, setData] = useState([]); // data
  const [isLoading, setIsLoading] = useState(true); // add loading features
  const [error, setError] = useState([]);

  useEffect(() => {
    let cancel = false;
    const fetchData = async () => {
      try {
        setIsLoading(true);

        const queryParam = new URLSearchParams();
        if (page) {
          // Permet de manipuler l'url
          queryParam.append("limit", 18);
          queryParam.append("skip", (page - 1) * 18);
          queryParam.append("sort", "createdAt:-1");
        }

        const response = await fetch(url + `?${queryParam}`);
        if (response.ok && !cancel) {
          const newData = await response.json();

          setData((x) =>
            Array.isArray(newData) ? [...x, ...newData] : [...x, newData]
          );
        }
      } catch (e) {
        setError("Erreur", e);
      } finally {
        if (!cancel) {
          setIsLoading(false);
        }
      }
    };
    fetchData();
    return () => (cancel = true);
  }, [url, page]);

  return {
    state: {
      data,
      setData,
    },
    isLoading,
    error,
  };
}

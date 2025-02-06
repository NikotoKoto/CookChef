import { useEffect, useState } from "react";
import { getRecipe } from "../apis";

// Fonction qui permet d'utiliser la data de facon global
export function useFetchRecipes( page) {
  const [recipe, setRecipe] = useState([]); // data
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
        const fetchedRecipe = await getRecipe(queryParam)
        if(!cancel){
          setRecipe(x => [...x, ...fetchedRecipe])

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
  }, [page]);

  return {
    state: {
      recipe,
      setRecipe,
    },
    isLoading,
    error,
  };
}

import { useEffect, useState } from "react";
import { fetchMeals } from "../repository/MealRepository";

const useGetMeals = (query = null) => {
  const [meals, setMeals] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchMeals(query).then((data) => {
      setMeals(data);
      setIsLoading(false);
    });
  }, [query]);

  return { meals, isLoading };
};

export default useGetMeals;

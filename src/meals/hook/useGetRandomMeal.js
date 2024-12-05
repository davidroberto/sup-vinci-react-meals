import { useEffect, useState } from "react";
import { fetchRandomMeal } from "../repository/MealRepository";

const useGetRandomMeal = () => {
  const [randomMeal, setRandomMeal] = useState(null);

  useEffect(() => {
    fetchRandomMeal().then((data) => setRandomMeal(data));
  }, []);

  return { randomMeal };
};

export default useGetRandomMeal;

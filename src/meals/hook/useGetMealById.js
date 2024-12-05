import { useEffect, useState } from "react";
import { fetchMealById } from "../repository/MealRepository";

const useGetMealById = (id) => {
  const [meal, setMeal] = useState(null);

  useEffect(() => {
    fetchMealById(id).then((data) => setMeal(data));
  }, [id]);

  return { meal };
};

export default useGetMealById;

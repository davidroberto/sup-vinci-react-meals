import { useEffect, useState } from "react";

const useGetRandomMeal = () => {
  const [randomMeal, setRandomMeal] = useState(null);

  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/random.php")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setRandomMeal(data.meals[0]);
      });
  }, []);

  return { randomMeal };
};

export default useGetRandomMeal;

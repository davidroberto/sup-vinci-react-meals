import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ShowMealPage = () => {
  const [meal, setMeal] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/lookup.php?i=" + id)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setMeal(data.meals[0]);
      });
  }, []);

  if (!meal) {
    return <p>Chargement</p>;
  }

  return <p>{meal.strMeal}</p>;
};

export default ShowMealPage;

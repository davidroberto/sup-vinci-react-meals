import { useEffect, useState } from "react";
import Footer from "../component/Footer";
import Header from "../component/Header";
import MealCard from "../component/MealCard";

const ListMeals = () => {
  const [meals, setMeals] = useState(null);

  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setMeals(data.meals);
      });
  }, []);

  if (!meals) {
    return (
      <>
        <Header />
        <p>En cours de chargement !</p>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />

      <main>
        {meals.map((meal) => {
          return <MealCard key={meal.idMeal} meal={meal} />;
        })}
      </main>

      <Footer />
    </>
  );
};

export default ListMeals;

import { useEffect, useState } from "react";
import Footer from "../component/Footer";
import Header from "../component/Header";

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
          return (
            <article key={meal.idMeal}>
              <p>{meal.strMeal}</p>
              <img width={"300px"} src={meal.strMealThumb} alt={meal.strMeal} />
            </article>
          );
        })}
      </main>

      <Footer />
    </>
  );
};

export default ListMeals;

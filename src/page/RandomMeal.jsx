import { useEffect, useState } from "react";
import Footer from "../component/Footer";
import Header from "../component/Header";
import MealCard from "../component/MealCard";

const RandomMeal = () => {
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

  if (!randomMeal) {
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
        <MealCard meal={randomMeal} />;
      </main>

      <Footer />
    </>
  );
};

export default RandomMeal;

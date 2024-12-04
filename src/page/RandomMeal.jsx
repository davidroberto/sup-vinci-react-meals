import { useEffect, useState } from "react";
import Footer from "../component/Footer";
import Header from "../component/Header";

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
        <article key={randomMeal.idMeal}>
          <p>{randomMeal.strMeal}</p>
          <img width={"300px"} src={randomMeal.strMealThumb} alt={randomMeal.strMeal} />
        </article>
      </main>

      <Footer />
    </>
  );
};

export default RandomMeal;

import { useEffect, useState } from "react";
import Footer from "../component/Footer";
import Header from "../component/Header";
import MealCard from "../component/MealCard";
import { useSearchParams } from "react-router-dom";

const SearchResultsPage = () => {
  const [meals, setMeals] = useState(null);

  const [searchParams] = useSearchParams();
  const query = searchParams.get("query");

  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=" + query)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setMeals(data.meals);
      });
  }, [query]);

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

export default SearchResultsPage;

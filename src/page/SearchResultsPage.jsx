import Footer from "../component/Footer";
import Header from "../component/Header";
import MealCard from "../component/MealCard";
import { useSearchParams } from "react-router-dom";
import useGetMeals from "../hook/useGetMeals";

const SearchResultsPage = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("query");

  const { meals, isLoading } = useGetMeals(query);

  if (isLoading) {
    return (
      <>
        <Header />
        <p>En cours de chargement !</p>
        <Footer />
      </>
    );
  }

  if (!isLoading && !meals) {
    return (
      <>
        <Header />
        <p>Pas de recettes !</p>
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

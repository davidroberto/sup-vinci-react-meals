import Footer from "../component/Footer";
import Header from "../component/Header";
import MealCard from "../component/MealCard";
import useGetMeals from "../hook/useGetMeals";

const ListMeals = () => {
  const { meals } = useGetMeals();

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

import Footer from "../component/Footer";
import Header from "../component/Header";
import MealCard from "../component/MealCard";
import useGetRandomMeal from "../hook/useGetRandomMeal";

const RandomMeal = () => {
  const { randomMeal } = useGetRandomMeal();

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

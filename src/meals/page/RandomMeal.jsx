import Header from "../../common/component/Header/Header";
import Footer from "../../common/component/Footer";
import useGetRandomMeal from "../hook/useGetRandomMeal";
import MealCard from "../component/MealCard";

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

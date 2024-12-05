import { useParams } from "react-router-dom";
import Header from "../component/Header";
import Footer from "../component/Footer";
import useGetMealById from "../hook/useGetMealById";

const ShowMealPage = () => {
  const { id } = useParams();
  const { meal } = useGetMealById(id);

  if (!meal) {
    return (
      <>
        <Header />
        <p>Chargement en cours</p>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />
      <main>
        <h1>{meal.strMeal}</h1>
        <p>Catégorie : {meal.strCategory}</p>
        <p>Instructions : </p>
        <p>{meal.strInstructions}</p>

        <img src={meal.strMealThumb} alt={meal.strMeal} />

        <p>Ingrédients :</p>
        <ul>
          {Object.keys(meal)
            .filter((key) => key.includes("Ingredient") && meal[key])
            .map((key) => {
              return (
                <li key={key}>
                  {meal[key]} - {meal[key.replace("Ingredient", "Measure")]}
                </li>
              );
            })}
        </ul>
      </main>
      <Footer />
    </>
  );
};

export default ShowMealPage;

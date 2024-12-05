import { useEffect, useState } from "react";

// je créé une fonction nommée useGetMeals,
// qui créé le state des recettes, fait le fetch pour remplir le state
// et retourne les recettes
// je dois nommer ma fonction avec un "use"
// pour que react me laisse utiliser ses hooks (useState, useEffect) etc
// c'est ce qu'on appelle un custom hook
const useGetMeals = () => {
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

  return { meals };
};

export default useGetMeals;

export const fetchMealById = async (id) => {
  const response = await fetch("https://www.themealdb.com/api/json/v1/1/lookup.php?i=" + id);
  const data = await response.json();
  return data.meals[0];
};

export const fetchMeals = async (query = null) => {
  let url = "https://www.themealdb.com/api/json/v1/1/search.php?s=" + query;
  if (query === null) {
    url = "https://www.themealdb.com/api/json/v1/1/search.php?s=";
  }
  const response = await fetch(url);
  const data = await response.json();
  return data.meals;
};

export const fetchRandomMeal = async () => {
  const response = await fetch("https://www.themealdb.com/api/json/v1/1/random.php");
  const data = await response.json();
  return data.meals[0];
};

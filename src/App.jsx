import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./common/page/HomePage";
import ContactPage from "./common/page/ContactPage";
import { MealsProvider } from "./meals/context/MealsContext";
import ListMeals from "./meals/page/ListMeals";
import RandomMeal from "./meals/page/RandomMeal";
import ShowMealPage from "./meals/page/ShowMeal";
import SearchResultsPage from "./meals/page/SearchResultsPage";

function App() {
  return (
    <MealsProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/meals" element={<ListMeals />} />
          <Route path="/random-meal" element={<RandomMeal />} />
          <Route path="/meal/:id" element={<ShowMealPage />} />
          <Route path="/search-results" element={<SearchResultsPage />} />
        </Routes>
      </BrowserRouter>
    </MealsProvider>
  );
}

export default App;

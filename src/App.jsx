import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./page/HomePage";
import ContactPage from "./page/ContactPage";
import ListMeals from "./page/ListMeals";
import RandomMeal from "./page/RandomMeal";
import ShowMealPage from "./page/ShowMeal";
import SearchResultsPage from "./page/SearchResultsPage";

function App() {
  return (
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
  );
}

export default App;

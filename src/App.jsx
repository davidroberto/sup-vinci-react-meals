import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./page/HomePage";
import ContactPage from "./page/ContactPage";
import ListMeals from "./page/ListMeals";
import RandomMeal from "./page/RandomMeal";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/meals" element={<ListMeals />} />
        <Route path="/random-meal" element={<RandomMeal />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

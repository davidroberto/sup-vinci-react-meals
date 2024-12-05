import { createContext } from "react";
import useGetMeals from "../hook/useGetMeals";

const MealsContext = createContext();

export const MealsProvider = ({ children }) => {
  const { meals, isLoading } = useGetMeals();

  return <MealsContext.Provider value={{ meals, isLoading }}>{children}</MealsContext.Provider>;
};

export default MealsContext;

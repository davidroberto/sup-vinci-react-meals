import { useContext } from "react";
import MealsContext from "../../meals/context/MealsContext";

const Footer = () => {
  const { meals, isLoading } = useContext(MealsContext);

  return (
    <footer>
      <p>Copyright 2024 David Robert</p>
    </footer>
  );
};

export default Footer;

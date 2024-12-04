import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <h1>Les recettes de Roberto</h1>

      <nav>
        <ul>
          <li>
            <Link to={"/"}>Accueil</Link>
          </li>

          <li>
            <Link to={"/contact"}>Contact</Link>
          </li>

          <li>
            <Link to={"/meals"}>Toutes les recettes</Link>
          </li>

          <li>
            <Link to={"/random-meal"}>Recette aléatoire</Link>
          </li>
        </ul>

        <form action="http://localhost:5173/search-results">
          <label>
            Recherche :
            <input type="text" name="search-query" />
          </label>

          <input type="submit" />
        </form>
      </nav>
    </header>
  );
};

export default Header;

import { Link, useNavigate } from "react-router-dom";
import "./Header.scss";

const Header = () => {
  const navigate = useNavigate();

  const handleSubmitSearch = (event) => {
    event.preventDefault();
    const query = event.target.query.value;

    navigate("/search-results?query=" + query);
  };

  return (
    <header className="header">
      <h1>Les recettes de Roberto</h1>

      <nav>
        <ul className="header-list">
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

        <form method="get" onSubmit={handleSubmitSearch}>
          <label>
            Recherche :
            <input type="search" name="query" />
          </label>

          <input type="submit" />
        </form>
      </nav>
    </header>
  );
};

export default Header;

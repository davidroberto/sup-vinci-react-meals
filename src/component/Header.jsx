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
        </ul>
      </nav>
    </header>
  );
};

export default Header;

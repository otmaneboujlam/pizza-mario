import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="mt-2">
      <ul className="text-center bg-info bg-gradient list-inline">
        <li className="list-inline-item">
          <Link className="text-black" to="Home">
            Home
          </Link>
        </li>
        <li className="list-inline-item">
          <Link className="text-black" to="/Presentation">
            Presentation
          </Link>
        </li>
        <li className="list-inline-item">
          <Link className="text-black" to="/Carte">
            Carte
          </Link>
        </li>
        <li className="list-inline-item">
          <Link className="text-black" to="/Localisation">
            Localisation
          </Link>
        </li>
        <li className="list-inline-item">Plan du site</li>
        <li className="list-inline-item">Gestion du stock</li>
      </ul>
      <p className="text-center bg-danger bg-gradient">
        ©Copyright 2050 par personne. Tous droits reversés.
      </p>
    </footer>
  );
}

export default Footer;

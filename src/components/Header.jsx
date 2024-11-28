import logo from "../images/logoRaM.jpg";
import "../styles/layout/Header.scss";

function Header() {
  return (
    <header className="header">
      <img className="header__logo" src={logo} alt="logo Rick and Morty" />
    </header>
  );
}

export default Header;

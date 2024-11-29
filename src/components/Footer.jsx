import logo from "../images/logoRaM.jpg";
import "../styles/layout/Footer.scss";

function Footer() {
  return (
    <footer className="footer">
      <img className="footer__logo" src={logo} alt="logo Rick and Morty" />
    </footer>
  );
}

export default Footer;

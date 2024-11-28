import "../styles/layout/NotFoundCharacter.scss";
import { Link } from "react-router-dom";
import NotFoundParagraph from "./NotFoundParagraph";

function NotFoundCharacter() {
  return (
    <>
      <NotFoundParagraph />
      <Link to={"/"} className="notFoundCharacter__return">
        {" "}
        <p>&lt; Volver</p>
      </Link>
    </>
  );
}

export default NotFoundCharacter;

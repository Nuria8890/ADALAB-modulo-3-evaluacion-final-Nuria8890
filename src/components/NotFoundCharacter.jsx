import "../styles/layout/NotFoundCharacter.scss";
import { Link } from "react-router-dom";

function NotFoundCharacter() {
  return (
    <>
      <p className="notFoundCharacter__text">
        EL PERSONAJE QUE BUSCAS NO EXISTE
      </p>
      <Link to={"/"} className="notFoundCharacter__return">
        {" "}
        <p>&lt; Volver</p>
      </Link>
    </>
  );
}

export default NotFoundCharacter;

import "../styles/layout/NotFound.scss";
import { Link } from "react-router-dom";

function NotFoundCharacter() {
  return (
    <>
      <p className="notFound__text">El personaje que buscas no existe</p>
      <Link to={"/"} className="notFound__return">
        {" "}
        <p>&lt; Volver</p>
      </Link>
    </>
  );
}

export default NotFoundCharacter;

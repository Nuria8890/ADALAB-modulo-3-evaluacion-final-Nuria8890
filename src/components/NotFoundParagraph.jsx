import "../styles/layout/NotFound.scss";
import "../styles/layout/ResetButton.scss";
import PropTypes from "prop-types";

function NotFoundParagraph({
  characters,
  filterName,
  filterSpecie,
  filterStatus,
}) {
  if (filterSpecie === "Human") {
    filterSpecie = "humano";
  } else if (filterSpecie === "Alien") {
    filterSpecie = "alien";
  }

  if (filterStatus === "Alive") {
    filterStatus = "vivo";
  } else if (filterStatus === "Dead") {
    filterStatus = "muerto";
  } else if (filterStatus === "unknown") {
    filterStatus = "desconocido";
  }

  if (characters === 0) {
    return (
      <>
        <p className="notFound__text">
          No hay ningún personaje que coincida con {filterName} {filterSpecie}{" "}
          {filterStatus}
        </p>
      </>
    );
  }
}

export default NotFoundParagraph;

NotFoundParagraph.propTypes = {
  characters: PropTypes.number.isRequired,
  filterName: PropTypes.string.isRequired,
  filterSpecie: PropTypes.string,
  filterStatus: PropTypes.string.isRequired,
};

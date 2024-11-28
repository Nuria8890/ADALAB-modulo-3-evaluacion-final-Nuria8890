import "../styles/layout/NotFoundCharacter.scss";
import "../styles/layout/ResetButton.scss";
import PropTypes from "prop-types";

function NotFoundParagraph({ characters, filterName }) {
  if (characters === 0) {
    return (
      <>
        <p className="notFoundCharacter__text">
          No hay ningún personaje que coincida con la palabra {filterName}
        </p>
      </>
    );
  }
}

export default NotFoundParagraph;

NotFoundParagraph.propTypes = {
  characters: PropTypes.number.isRequired,
  filterName: PropTypes.string.isRequired,
};

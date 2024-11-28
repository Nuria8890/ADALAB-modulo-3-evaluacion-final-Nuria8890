import "../styles/layout/NotFoundCharacter.scss";
import PropTypes from "prop-types";

function NotFoundParagraph({ characters, filterName, onClickReset }) {
  const handleClickReset = () => {
    onClickReset();
  };

  if (characters === 0) {
    return (
      <>
        <p className="notFoundCharacter__text">
          No hay ningún personaje que coincida con la palabra {filterName}
        </p>
        <div className="notFoundCharacter__resetButton">
          <button type="reset" onClick={handleClickReset}>
            Reset
          </button>
        </div>
      </>
    );
  }
}

export default NotFoundParagraph;

NotFoundParagraph.propTypes = {
  characters: PropTypes.number.isRequired,
  filterName: PropTypes.string.isRequired,
  onClickReset: PropTypes.func.isRequired,
};

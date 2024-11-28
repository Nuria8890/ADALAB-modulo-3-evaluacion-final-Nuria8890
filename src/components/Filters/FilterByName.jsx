import PropTypes from "prop-types";
import "../../styles/layout/Filters.scss";

function FilterByName({ onChangeInputName, filterName }) {
  const handleChangeInput = (event) => {
    onChangeInputName(event.target.value);
  };

  const handleKeyDownInput = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
    }
  };
  return (
    <>
      <label htmlFor="search">
        <input
          className="filters__byName"
          type="text"
          name="search"
          id="search"
          onChange={handleChangeInput}
          onKeyDown={handleKeyDownInput}
          value={filterName}
        />{" "}
      </label>
    </>
  );
}

export default FilterByName;

FilterByName.propTypes = {
  onChangeInputName: PropTypes.func.isRequired,
  filterName: PropTypes.string.isRequired,
};

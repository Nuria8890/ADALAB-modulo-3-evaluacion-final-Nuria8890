import PropTypes from "prop-types";

function FilterByName({ onChangeInput, filterName }) {
  const handleChangeInput = (event) => {
    onChangeInput(event.target.value);
  };

  const handleKeyDownInput = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
    }
  };
  return (
    <>
      <label htmlFor="search">Buscar: </label>
      <input
        type="text"
        name="search"
        id="search"
        onChange={handleChangeInput}
        onKeyDown={handleKeyDownInput}
        value={filterName}
      />
    </>
  );
}

export default FilterByName;

FilterByName.propTypes = {
  onChangeInput: PropTypes.func.isRequired,
  filterName: PropTypes.string.isRequired,
};

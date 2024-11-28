import PropTypes from "prop-types";

function FilterByName({ onChangeInput }) {
  const handleChangeInput = (event) => {
    onChangeInput(event.target.value);
  };
  return (
    <>
      <label htmlFor="search">Buscar: </label>
      <input
        type="text"
        name="search"
        id="search"
        onChange={handleChangeInput}
      />
    </>
  );
}

export default FilterByName;

FilterByName.propTypes = {
  onChangeInput: PropTypes.func.isRequired,
};

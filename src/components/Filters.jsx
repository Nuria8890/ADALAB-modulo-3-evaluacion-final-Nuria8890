import PropTypes from "prop-types";

function Filters({ onChangeInput }) {
  const handleChangeInput = (event) => {
    onChangeInput(event.target.value);
  };
  return (
    <form>
      <label htmlFor="search">Buscar: </label>
      <input
        type="text"
        name="search"
        id="search"
        onChange={handleChangeInput}
      />
    </form>
  );
}

export default Filters;

Filters.propTypes = {
  onChangeInput: PropTypes.func.isRequired,
};

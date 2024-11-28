import PropTypes from "prop-types";
import FilterByName from "./FilterByName";

function Filters({ onChangeInput }) {
  return (
    <form>
      <FilterByName onChangeInput={onChangeInput} />
    </form>
  );
}

export default Filters;

Filters.propTypes = {
  onChangeInput: PropTypes.func.isRequired,
};

import PropTypes from "prop-types";
import FilterByName from "./FilterByName";

function Filters({ onChangeInput, filterName }) {
  return (
    <form>
      <FilterByName onChangeInput={onChangeInput} filterName={filterName} />
    </form>
  );
}

export default Filters;

Filters.propTypes = {
  onChangeInput: PropTypes.func.isRequired,
  filterName: PropTypes.string.isRequired,
};

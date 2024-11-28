import PropTypes from "prop-types";
import FilterByName from "./FilterByName";
import "../../styles/layout/Filters.scss";

function Filters({ onChangeInput, filterName }) {
  return (
    <form className="filters">
      <FilterByName onChangeInput={onChangeInput} filterName={filterName} />
    </form>
  );
}

export default Filters;

Filters.propTypes = {
  onChangeInput: PropTypes.func.isRequired,
  filterName: PropTypes.string.isRequired,
};

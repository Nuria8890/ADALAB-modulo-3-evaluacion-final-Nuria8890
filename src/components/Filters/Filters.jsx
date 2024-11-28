import PropTypes from "prop-types";
import FilterByName from "./FilterByName";
import FilterBySpecie from "./FilterBySpecie";
import "../../styles/layout/Filters.scss";

function Filters({ onChangeInput, filterName }) {
  return (
    <form className="filters">
      <FilterByName onChangeInput={onChangeInput} filterName={filterName} />
      <FilterBySpecie />
    </form>
  );
}

export default Filters;

Filters.propTypes = {
  onChangeInput: PropTypes.func.isRequired,
  filterName: PropTypes.string.isRequired,
};

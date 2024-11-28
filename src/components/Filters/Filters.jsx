import PropTypes from "prop-types";
import FilterByName from "./FilterByName";
import FilterBySpecie from "./FilterBySpecie";
import "../../styles/layout/Filters.scss";
import ResetButton from "../ResetButton";

function Filters({
  onChangeInputName,
  filterName,
  onChangeInputSpecie,
  onClickReset,
}) {
  return (
    <form className="filters">
      <ResetButton onClickReset={onClickReset} />

      <FilterByName
        onChangeInputName={onChangeInputName}
        filterName={filterName}
      />
      <FilterBySpecie onChangeInputSpecie={onChangeInputSpecie} />
    </form>
  );
}

export default Filters;

Filters.propTypes = {
  onChangeInputName: PropTypes.func.isRequired,
  filterName: PropTypes.string.isRequired,
  onChangeInputSpecie: PropTypes.func.isRequired,
  onClickReset: PropTypes.func.isRequired,
};

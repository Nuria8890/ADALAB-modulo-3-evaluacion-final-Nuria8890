import PropTypes from "prop-types";
import FilterByName from "./FilterByName";
import FilterBySpecie from "./FilterBySpecie";
import "../../styles/layout/Filters.scss";
import ResetButton from "../ResetButton";
import FilterByStatus from "./FilterByStatus";

function Filters({
  onChangeInputName,
  filterName,
  onChangeInputSpecie,
  filterSpecie,
  onClickReset,
  onChangeInputStatus,

  filterStatus,
}) {
  return (
    <form className="filters">
      <div className="filters__buton-name">
        <ResetButton onClickReset={onClickReset} />

        <FilterByName
          onChangeInputName={onChangeInputName}
          filterName={filterName}
        />
      </div>
      <FilterBySpecie
        onChangeInputSpecie={onChangeInputSpecie}
        filterSpecie={filterSpecie}
      />

      <FilterByStatus
        onChangeInputStatus={onChangeInputStatus}
        filterStatus={filterStatus}
      />
    </form>
  );
}

export default Filters;

Filters.propTypes = {
  onChangeInputName: PropTypes.func.isRequired,
  filterName: PropTypes.string.isRequired,
  onChangeInputSpecie: PropTypes.func.isRequired,
  filterSpecie: PropTypes.string.isRequired,
  onClickReset: PropTypes.func.isRequired,
  onChangeInputStatus: PropTypes.func.isRequired,
  filterStatus: PropTypes.string.isRequired,
};

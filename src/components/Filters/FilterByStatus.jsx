import "../../styles/layout/Filters.scss";
import PropTypes from "prop-types";
import { FaHeartPulse } from "react-icons/fa6";
import { FaSkullCrossbones } from "react-icons/fa";
import { GrStatusUnknown } from "react-icons/gr";

function FilterByStatus({ onChangeInputStatus }) {
  const handleChange = (event) => {
    onChangeInputStatus(event.target.value);
  };
  return (
    <div className="filters__bySpecie">
      <h4>Estado</h4>
      <div className="filters__bySpecie__inputs">
        <label>
          <FaHeartPulse /> Vivo{" "}
          <input
            type="radio"
            id="alive"
            name="status"
            value="Alive"
            onChange={handleChange}
          />
        </label>

        <label>
          <FaSkullCrossbones /> Muerto{" "}
          <input
            type="radio"
            id="dead"
            name="status"
            value="Dead"
            onChange={handleChange}
          />
        </label>

        <label>
          <GrStatusUnknown /> Desconocido{" "}
          <input
            type="radio"
            id="unknown"
            name="status"
            value="unknown"
            onChange={handleChange}
          />
        </label>
      </div>
    </div>
  );
}

export default FilterByStatus;
FilterByStatus.propTypes = {
  onChangeInputStatus: PropTypes.func.isRequired,
};

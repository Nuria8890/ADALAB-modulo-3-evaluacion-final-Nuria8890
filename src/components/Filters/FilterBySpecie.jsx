import "../../styles/layout/Filters.scss";
import PropTypes from "prop-types";

function FilterBySpecie({ onChangeInputSpecie }) {
  const handleChange = (event) => {
    onChangeInputSpecie(event.target.value);
  };
  return (
    <div className="filters__bySpecie">
      <h4>Especie</h4>
      <div className="filters__bySpecie__inputs">
        <label>
          Human{" "}
          <input
            type="radio"
            id="human"
            name="specie"
            value="Human"
            onChange={handleChange}
          />
        </label>

        <label>
          Alien{" "}
          <input
            type="radio"
            id="alien"
            name="specie"
            value="Alien"
            onChange={handleChange}
          />
        </label>
      </div>
    </div>
  );
}

export default FilterBySpecie;

FilterBySpecie.propTypes = {
  onChangeInputSpecie: PropTypes.func.isRequired,
};

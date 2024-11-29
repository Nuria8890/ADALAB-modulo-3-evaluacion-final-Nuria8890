import "../../styles/layout/Filters.scss";
import PropTypes from "prop-types";
import { PiAlienFill } from "react-icons/pi";
import { RxAvatar } from "react-icons/rx";

function FilterBySpecie({ onChangeInputSpecie, filterSpecie }) {
  const handleChange = (event) => {
    onChangeInputSpecie(event.target.value);
  };
  return (
    <div className="filters__bySpecie-Status">
      <h4>Especie</h4>
      <div className="filters__bySpecie-Status__inputs">
        <label>
          <RxAvatar /> Humano{" "}
          <input
            type="radio"
            id="human"
            name="specie"
            value="Human"
            checked={filterSpecie === "Human"}
            onChange={handleChange}
          />
        </label>

        <label>
          <PiAlienFill /> Alien{" "}
          <input
            type="radio"
            id="alien"
            name="specie"
            value="Alien"
            checked={filterSpecie === "Alien"}
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
  filterSpecie: PropTypes.string.isRequired,
};

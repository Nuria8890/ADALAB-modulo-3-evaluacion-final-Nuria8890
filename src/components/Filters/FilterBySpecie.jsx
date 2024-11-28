import "../../styles/layout/Filters.scss";

function FilterBySpecie() {
  return (
    <div className="filters__bySpecie">
      <h4>Especie</h4>
      <div className="filters__bySpecie__inputs">
        <label>
          Human <input type="radio" id="human" name="specie" value="human" />
        </label>

        <label>
          Alien <input type="radio" id="alien" name="specie" value="alien" />
        </label>
      </div>
    </div>
  );
}

export default FilterBySpecie;

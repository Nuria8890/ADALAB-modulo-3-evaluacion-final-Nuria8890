import PropTypes from "prop-types";
import { useParams } from "react-router-dom";
import "../styles/layout/CharacterDetails.scss";

function CharacterDetails({ characters }) {
  const { idCharacter } = useParams();

  const selectedCharacter = characters.find((character) => {
    return character.id === parseInt(idCharacter);
  });

  return (
    <>
      <p className="details__p">
        {" "}
        <i class="fa-solid fa-less-than details__p__icon"></i> Volver
      </p>
      <section className="containerDetails">
        <div className="details">
          <img src={selectedCharacter.photo} alt={selectedCharacter.name} />
          <div className="details__text">
            <h3>{selectedCharacter.name}</h3>
            <p>
              <b>Status</b>: {selectedCharacter.status}
            </p>
            <p>
              <b>Species</b>: {selectedCharacter.species}
            </p>
            <p>
              <b>Origin</b>: {selectedCharacter.planet}
            </p>
            <p>
              <b>Episodies</b>: {selectedCharacter.episodies}
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default CharacterDetails;

CharacterDetails.propTypes = {
  characters: PropTypes.array.isRequired,
};

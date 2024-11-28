import PropTypes from "prop-types";
import { useParams } from "react-router-dom";

function CharacterDetails({ characters }) {
  const { idCharacter } = useParams();

  const selectedCharacter = characters.find((character) => {
    return character.id === parseInt(idCharacter);
  });

  return (
    <section>
      <img src={selectedCharacter.photo} alt={selectedCharacter.name} />
      <h4>{selectedCharacter.name}</h4>
      <p>Status: {selectedCharacter.status}</p>
      <p>Species: {selectedCharacter.species}</p>
      <p>Origin: {selectedCharacter.planet}</p>
      <p>Episodies: {selectedCharacter.episodies}</p>
    </section>
  );
}

export default CharacterDetails;

CharacterDetails.propTypes = {
  characters: PropTypes.array.isRequired,
};

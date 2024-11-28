import PropTypes from "prop-types";

function CharacterCard({ character }) {
  return (
    <li>
      <img src={character.photo} alt={character.name} />
      <h4>{character.name}</h4>
      <p>{character.species}</p>
    </li>
  );
}

export default CharacterCard;

CharacterCard.propTypes = {
  character: PropTypes.object.isRequired,
};

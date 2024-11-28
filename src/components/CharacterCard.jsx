import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function CharacterCard({ character }) {
  return (
    <li>
      <Link to={`/characters/${character.id}`}>
        <img src={character.photo} alt={character.name} />
        <h4>{character.name}</h4>
        <p>{character.species}</p>
      </Link>
    </li>
  );
}

export default CharacterCard;

CharacterCard.propTypes = {
  character: PropTypes.object.isRequired,
};

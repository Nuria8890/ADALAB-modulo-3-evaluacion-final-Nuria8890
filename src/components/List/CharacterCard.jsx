import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "../../styles/layout/CharacterList.scss";

function CharacterCard({ character }) {
  return (
    <li className="list__item">
      <Link to={`/characters/${character.id}`}>
        <img src={character.photo} alt={character.name} />
        <div className="list__item__text">
          <h4>{character.name}</h4>
          <p>{character.species === "Human" ? "Humano" : character.species}</p>
        </div>
      </Link>
    </li>
  );
}

export default CharacterCard;

CharacterCard.propTypes = {
  character: PropTypes.object.isRequired,
};

import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { RxAvatar } from "react-icons/rx";
import { PiAlienFill } from "react-icons/pi";
import "../../styles/layout/CharacterList.scss";

function CharacterCard({ character }) {
  if (character.species === "Human") {
    character.species = (
      <span>
        Humano <RxAvatar />
      </span>
    );
  } else {
    character.species = (
      <span>
        Alien <PiAlienFill />
      </span>
    );
  }

  return (
    <li className="list__item">
      <Link to={`/characters/${character.id}`}>
        <img src={character.photo} alt={character.name} />
        <div className="list__item__text">
          <h4>{character.name}</h4>
          <p>{character.species}</p>
        </div>
      </Link>
    </li>
  );
}

export default CharacterCard;

CharacterCard.propTypes = {
  character: PropTypes.object.isRequired,
};

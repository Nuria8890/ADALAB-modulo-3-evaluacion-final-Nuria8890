import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "../../styles/layout/CharacterList.scss";

import { RxAvatar } from "react-icons/rx";
import { PiAlienFill } from "react-icons/pi";

function CharacterCard({ character }) {
  let specie;
  if (character.species === "Human") {
    specie = (
      <span>
        Humano <RxAvatar />
      </span>
    );
  } else {
    specie = (
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
          <p>{specie}</p>
        </div>
      </Link>
    </li>
  );
}

export default CharacterCard;

CharacterCard.propTypes = {
  character: PropTypes.object.isRequired,
};

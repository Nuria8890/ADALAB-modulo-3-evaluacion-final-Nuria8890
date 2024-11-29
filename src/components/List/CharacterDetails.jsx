import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import "../../styles/layout/CharacterDetails.scss";
import { PiAlienFill } from "react-icons/pi";
import { RxAvatar } from "react-icons/rx";
import { FaHeartPulse } from "react-icons/fa6";
import { FaSkullCrossbones } from "react-icons/fa";
import { GrStatusUnknown } from "react-icons/gr";
import NotFoundCharacter from "../NotFoundCharacter";

function CharacterDetails({ characters }) {
  const { idCharacter } = useParams();

  const isANumber = isNaN(idCharacter) === false;

  const selectedCharacter = characters.find((character) => {
    return character.id === parseInt(idCharacter);
  });

  if (!isANumber) {
    return <NotFoundCharacter />;
  }

  if (!selectedCharacter) {
    return <NotFoundCharacter />;
  }

  let status;

  if (selectedCharacter.status === "Dead") {
    status = (
      <span>
        Muerto <FaSkullCrossbones />
      </span>
    );
  } else if (selectedCharacter.status === "Alive") {
    status = (
      <span>
        Vivo <FaHeartPulse />
      </span>
    );
  } else {
    status = (
      <span>
        Desconocido <GrStatusUnknown />
      </span>
    );
  }
  let specie;
  if (selectedCharacter.species === "Human") {
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
    <>
      <Link to={"/"} className="details__p">
        {" "}
        <p>&lt; Volver</p>
      </Link>

      <section className="containerDetails">
        <div className="details">
          <img src={selectedCharacter.photo} alt={selectedCharacter.name} />
          <div className="details__text">
            <h3>{selectedCharacter.name}</h3>
            <p>
              <b>Estado</b>: {status}
            </p>
            <p>
              <b>Especie</b>: {specie}
            </p>
            <p>
              <b>Origen</b>:{" "}
              {selectedCharacter.planet === "unknown" ? (
                <span>
                  Desconocido <GrStatusUnknown />
                </span>
              ) : (
                selectedCharacter.planet
              )}
            </p>
            <p>
              <b>Episodios</b>: {selectedCharacter.episodies}
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

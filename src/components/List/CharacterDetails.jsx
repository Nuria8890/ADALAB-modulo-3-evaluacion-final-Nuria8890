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

  const selectedCharacter = characters.find((character) => {
    return character.id === parseInt(idCharacter);
  });

  if (selectedCharacter === undefined) {
    return <NotFoundCharacter />;
  }

  let status;

  if (selectedCharacter.status === "Dead") {
    status = <FaSkullCrossbones />;
  } else if (selectedCharacter.status === "Alive") {
    status = <FaHeartPulse />;
  } else {
    status = <GrStatusUnknown />;
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
              <b>Especie</b>:{" "}
              {selectedCharacter.species === "Alien" ? (
                <PiAlienFill />
              ) : (
                <RxAvatar />
              )}
            </p>
            <p>
              <b>Origen</b>:{" "}
              {selectedCharacter.planet === "unknown" ? (
                <GrStatusUnknown />
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

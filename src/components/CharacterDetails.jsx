import PropTypes from "prop-types";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import "../styles/layout/CharacterDetails.scss";
// import { library } from "@fortawesome/fontawesome-svg-core";
// import { all } from "@awesome.me/kit-KIT_CODE/icons";
// library.add(...all);
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function CharacterDetails({ characters }) {
  const { idCharacter } = useParams();

  const selectedCharacter = characters.find((character) => {
    return character.id === parseInt(idCharacter);
  });

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
              <b>Status</b>: {selectedCharacter.status}
            </p>
            <p>
              <b>Species</b>: {selectedCharacter.species}
              {/* <FontAwesomeIcon icon="fa-brands fa-reddit-alien" /> */}
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

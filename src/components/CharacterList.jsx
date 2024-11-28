import PropTypes from "prop-types";
import CharacterCard from "./CharacterCard";
import "../styles/layout/CharacterList.scss";

function CharacterList({ characters }) {
  const charactersItem = characters.map((character) => {
    return <CharacterCard key={character.id} character={character} />;
  });

  return (
    <section className="containerList">
      <ul className="list">{charactersItem}</ul>
    </section>
  );
}

export default CharacterList;

CharacterList.propTypes = {
  characters: PropTypes.array.isRequired,
};

import PropTypes from "prop-types";
import CharacterCard from "./CharacterCard";

function CharacterList({ characters }) {
  const charactersItem = characters.map((character) => {
    return <CharacterCard key={character.id} character={character} />;
  });
  return (
    <section>
      <ul>{charactersItem}</ul>
    </section>
  );
}

export default CharacterList;

CharacterList.propTypes = {
  characters: PropTypes.array.isRequired,
};

import "../styles/App.scss";
import callToApi from "../services/api";
// import localStorage from "../services/localStorage";
import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import logo from "../images/logoRaM.jpg";
import Filters from "./Filters/Filters";
import CharacterList from "./CharacterList";
import CharacterDetails from "./CharacterDetails";

function App() {
  // States
  const [characters, setCharacters] = useState([]);
  const [filterName, setFilterName] = useState("");

  // useEffect
  useEffect(() => {
    callToApi().then((response) => {
      setCharacters(response);
    });
  }, []);

  // useEffect(() => {
  // localStorage.set("variable", variable);

  // Este useEffect solo se ejecutará cuando cambie la variable
  // console.log("Ha cambiado la variable");
  // }, [variable]);

  // Events
  const changeInputValue = (value) => {
    setFilterName(value);
  };

  // Functions
  const filteredCharacters = characters.filter((character) => {
    return character.name
      .toLowerCase()
      .includes(filterName.toLocaleLowerCase());
  });

  return (
    <>
      <header>
        <img src={logo} alt="logo Rick and Morty" />
      </header>
      <main>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Filters onChangeInput={changeInputValue} />
                <CharacterList characters={filteredCharacters} />
              </>
            }
          />

          <Route
            path="/characters/:idCharacter"
            element={<CharacterDetails characters={filteredCharacters} />}
          />
        </Routes>
      </main>
    </>
  );
}

export default App;

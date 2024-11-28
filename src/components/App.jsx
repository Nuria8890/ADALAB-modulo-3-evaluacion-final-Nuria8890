import "../styles/App.scss";
import callToApi from "../services/api";
import localStorage from "../services/localStorage";
import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import logo from "../images/logoRaM.jpg";
import Filters from "./Filters/Filters";
import CharacterList from "./CharacterList";
import CharacterDetails from "./CharacterDetails";

function App() {
  // States
  const [characters, setCharacters] = useState([]);
  const [filterName, setFilterName] = useState(
    localStorage.get("searchName", "")
  );

  // useEffect
  useEffect(() => {
    callToApi().then((response) => {
      setCharacters(response);
    });
  }, []);

  useEffect(() => {
    localStorage.set("searchName", filterName);
  }, [filterName]);

  // Events
  const changeInputValue = (value) => {
    setFilterName(value);

    //   const characterName = characters.map((character) => {
    //     return character.name;
    //   });
    //   console.log("characterName", characterName);
    //   console.log(
    //     "characterName.map()",
    //     characterName.map((name) => {
    //       return name.includes(value);
    //     })
    //   );

    //   if (
    //     characterName.map((name) => {
    //       return name.includes(value);
    //     })
    //   ) {
    //     console.log("Ese nombre existe");
    //     return setFilterName(value);
    //   } else {
    //     console.log(
    //       `No hay ningún personaje que coincida con la palabra ${value}`
    //     );
    //   }
  };

  // Functions
  const filteredCharacters = characters.filter((character) => {
    return character.name.toLowerCase().includes(filterName.toLowerCase());
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
                <Filters
                  onChangeInput={changeInputValue}
                  filterName={filterName}
                />
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

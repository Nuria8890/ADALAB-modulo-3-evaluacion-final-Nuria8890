import "../styles/App.scss";
import callToApi from "../services/api";
import localStorage from "../services/localStorage";
import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./Header";
import Filters from "./Filters/Filters";
import CharacterList from "./CharacterList";
import CharacterDetails from "./CharacterDetails";
import NotFoundCharacter from "./NotFoundCharacter";

function App() {
  // States
  const [characters, setCharacters] = useState([]);
  const [filterName, setFilterName] = useState(
    localStorage.get("searchName", "")
  );
  const [filterSpecie, setFilterSpecie] = useState("");

  // useEffect
  useEffect(() => {
    callToApi().then((response) => {
      const orderedCharacters = [...response].sort((a, b) => {
        if (a.name < b.name) {
          return -1;
        }
        if (a.name > b.name) {
          return 1;
        } else {
          return 0;
        }
      });
      setCharacters(orderedCharacters);
    });
  }, []);

  useEffect(() => {
    localStorage.set("searchName", filterName);
  }, [filterName]);

  // Events
  const changeInputNameValue = (value) => {
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

  const changeInputSpecie = (value) => {
    setFilterSpecie(value);
  };

  // Functions

  const filteredCharacters = characters
    .filter((character) => {
      return character.name.toLowerCase().includes(filterName.toLowerCase());
    })
    .filter((character) => {
      return filterSpecie === "" ? true : character.species === filterSpecie;
    });

  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Filters
                  onChangeInputName={changeInputNameValue}
                  filterName={filterName}
                  onChangeInputSpecie={changeInputSpecie}
                />
                <CharacterList characters={filteredCharacters} />
              </>
            }
          />

          <Route
            path="/characters/:idCharacter"
            element={<CharacterDetails characters={filteredCharacters} />}
          />

          <Route path="*" element={<NotFoundCharacter />} />
        </Routes>
      </main>
    </>
  );
}

export default App;

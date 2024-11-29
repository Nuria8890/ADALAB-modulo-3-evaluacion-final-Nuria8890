import "../styles/App.scss";
import callToApi from "../services/api";
import localStorage from "../services/localStorage";
import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./Header";
import Filters from "./Filters/Filters";
import CharacterList from "./List/CharacterList";
import CharacterDetails from "./List/CharacterDetails";
import Footer from "./Footer";
import NotFoundCharacter from "./NotFoundCharacter";
import NotFoundParagraph from "./NotFoundParagraph";

function App() {
  // States
  const [characters, setCharacters] = useState([]);
  const [filterName, setFilterName] = useState(
    localStorage.get("searchName", "")
  );
  const [filterSpecie, setFilterSpecie] = useState("");
  const [filterStatus, setFilterStatus] = useState("");

  // Events
  const changeInputNameValue = (value) => {
    setFilterName(value);
  };

  const changeInputSpecie = (value) => {
    setFilterSpecie(value);
  };

  const onChangeInputStatus = (value) => {
    setFilterStatus(value);
  };

  // Functions

  const filteredCharacters = characters
    .filter((character) => {
      return character.name.toLowerCase().includes(filterName.toLowerCase());
    })
    .filter((character) => {
      return filterSpecie === "" ? true : character.species === filterSpecie;
    })
    .filter((character) => {
      return filterStatus === "" ? true : character.status === filterStatus;
    });

  const clickReset = () => {
    setFilterName("");
    setFilterSpecie("");
    setFilterStatus("");
  };

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
    if (filteredCharacters.length > 0) {
      localStorage.set("searchName", filterName);
    }
  }, [filterName, filteredCharacters]);

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
                  filterSpecie={filterSpecie}
                  onClickReset={clickReset}
                  onChangeInputStatus={onChangeInputStatus}
                  filterStatus={filterStatus}
                />
                <CharacterList characters={filteredCharacters} />
                <NotFoundParagraph
                  characters={filteredCharacters.length}
                  filterName={filterName}
                  filterSpecie={filterSpecie}
                  filterStatus={filterStatus}
                  onClickReset={clickReset}
                />
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
      <Footer />
    </>
  );
}

export default App;

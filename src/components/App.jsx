import "../styles/App.scss";
import callToApi from "../services/api";
// import localStorage from "../services/localStorage";
import { useState, useEffect } from "react";
// import { Link, Route, Routes } from "react-router-dom";
import Filters from "./Filters/Filters";
import CharacterList from "./CharacterList";

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
    console.log("filterName", filterName);
  };

  // Functions
  const filteredCharacters = characters.filter((character) => {
    return character.name
      .toLowerCase()
      .includes(filterName.toLocaleLowerCase());
  });

  return (
    <>
      <Filters onChangeInput={changeInputValue} />
      <CharacterList characters={filteredCharacters} />
    </>
  );
}

export default App;

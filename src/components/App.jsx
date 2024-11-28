import "../styles/App.scss";
import callToApi from "../services/api";
// import localStorage from "../services/localStorage";
import { useState, useEffect } from "react";
// import { Link, Route, Routes } from "react-router-dom";
import Filters from "./Filters";
import CharacterList from "./CharacterList";

function App() {
  // Estados

  const [characters, setCharacters] = useState([]);

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

  // Eventos

  const changeInputValue = (value) => {
    console.log(value);
  };

  return (
    <>
      <Filters onChangeInput={changeInputValue} />
      <CharacterList characters={characters} />
    </>
  );
}

export default App;

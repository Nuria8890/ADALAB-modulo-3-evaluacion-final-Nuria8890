import "../styles/App.scss";
import callToApi from "../services/api";
import localStorage from "../services/localStorage";
import { useState, useEffect } from "react";
// import { Link, Route, Routes } from "react-router-dom";
import Form from "./Form";

function App() {
  // Estados

  const [variable, setVariable] = useState(localStorage.get("variable", ""));

  // useEffect

  useEffect(() => {
    callToApi().then((response) => {
      setVariable(response);
    });
  }, [variable]);

  useEffect(() => {
    localStorage.set("variable", variable);

    // Este useEffect solo se ejecutará cuando cambie la variable
    console.log("Ha cambiado la variable");
  }, [variable]);

  // Eventos

  const changeInputValue = (value) => {
    setVariable(value);
  };

  return (
    <>
      <Form onChangeInput={changeInputValue} />
    </>
  );
}

export default App;

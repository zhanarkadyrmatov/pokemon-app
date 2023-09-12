import { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import AppPouter from "./AppPouter";
import PokemonProvider from "./context/PokemonProvider";

function App() {
  return (
    <div className="App">
      <PokemonProvider>
        <AppPouter />
      </PokemonProvider>
    </div>
  );
}

export default App;

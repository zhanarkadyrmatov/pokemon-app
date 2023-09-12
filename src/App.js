import { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import AppPouter from "./AppPouter";
import PokemonProvider from "./context/PokemonProvider";

function App() {
  // const [items, setItems] = useState([]);
  // const fetchData = async () => {
  //   const response = await axios.get("/pokemon/ditto");
  //   setItems(response);
  // };
  // console.log(items);
  // useEffect(() => {
  //   fetchData();
  // }, []);

  return (
    <div className="App">
      <PokemonProvider>
        <AppPouter />
      </PokemonProvider>
    </div>
  );
}

export default App;

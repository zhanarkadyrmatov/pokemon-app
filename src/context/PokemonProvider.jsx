import React, { useEffect, useState } from "react";
import { PokemonContext } from "./PokemonContext";
import axios from "axios";

export default function PokemonProvider({ children }) {
  const [allPokemons, setAllPokemons] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(true);

  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const limit = 40;

  useEffect(() => {
    const baseURL = "https://pokeapi.co/api/v2/";

    const fetchData = async () => {
      try {
        const res = await axios.get(
          `${baseURL}pokemon?limit=${limit}&offset=${(currentPage - 1) * limit}`
        );
        const data = res.data;

        const promises = data.results.map(async (pokemon) => {
          const res = await axios.get(pokemon.url);
          return res.data;
        });

        const results = await Promise.all(promises);
        setAllPokemons(results);
        console.log(results);
        setTotalPages(Math.ceil(data.count / limit));
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, [currentPage]);

  const handleNextPage = () => {
    setLoading(true);
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setLoading(true);
      setCurrentPage(currentPage - 1);
    }
  };

  const getPokemonByID = async (id) => {
    const baseURL = "https://pokeapi.co/api/v2/";
    const res = await fetch(`${baseURL}pokemon/${id}`);
    const data = await res.json();
    return data;
  };

  return (
    <PokemonContext.Provider
      value={{
        allPokemons,
        getPokemonByID,
        loading,
        setSearchQuery,
        searchQuery,
        handleNextPage,
        handlePrevPage,
        totalPages,
      }}
    >
      {children}
    </PokemonContext.Provider>
  );
}

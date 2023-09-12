import React, { useContext } from "react";
import { PokemonContext } from "../context/PokemonContext";
import CardPokemon from "../Component/CardPokemon";
import { Button, Col, Row } from "react-bootstrap";
import Loading from "./Loading";

function PokemonList() {
  const {
    allPokemons,
    loading,
    searchQuery,
    handlePrevPage,
    handleNextPage,
    currentPage,
    totalPages,
    globalPokemons,
  } = useContext(PokemonContext);

  const filteredPokemons = allPokemons.filter((pokemon) =>
    pokemon.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <Row className=" justify-content-center align-items-center">
      {loading ? (
        <Loading />
      ) : (
        <>
          {filteredPokemons ? (
            <>
              {filteredPokemons.length == 0 ? (
                <p className="p-search">
                  Se encontraron <span>{filteredPokemons.length}</span>{" "}
                  resultados:
                </p>
              ) : null}
              {filteredPokemons.map((pokemon, index) => (
                <Col key={index} md={4} lg={3} className="p-2">
                  <CardPokemon pokemon={pokemon} />
                </Col>
              ))}
            </>
          ) : (
            allPokemons.map((pokemon, index) => (
              <Col key={index} md={4} lg={3} className="p-2">
                <CardPokemon pokemon={pokemon} />
              </Col>
            ))
          )}
          {filteredPokemons.length !== 0 ? (
            <div className="d-flex justify-content-center align-items-center gap-2 m-2 ">
              <Button
                variant={allPokemons[0].id > 40 ? "primary" : "secondary"}
                onClick={handlePrevPage}
                disabled={currentPage === 1}
              >
                Previous Page
              </Button>

              <Button
                onClick={handleNextPage}
                disabled={currentPage === totalPages}
              >
                Next Page
              </Button>
            </div>
          ) : null}
        </>
      )}
    </Row>
  );
}

export default PokemonList;

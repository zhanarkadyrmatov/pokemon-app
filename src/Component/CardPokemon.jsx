import React from "react";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";

function CardPokemon({ pokemon }) {
  return (
    <Link
      style={{
        textDecoration: "none",
      }}
      to={`/pokemon/${pokemon.id}`}
    >
      <Card
        className="card"
        style={{
          maxWidth: "25rem",
          textAlign: "center",
        }}
      >
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            background: "#f2f2f2",
          }}
        >
          <Card.Img
            variant="top"
            style={{ width: "200px", height: "200px", margin: "0px" }}
            src={pokemon.sprites.other.dream_world.front_default}
          />
        </div>

        <Card.Body>
          <p className="m-0 fw-bold ">№ {pokemon.id}</p>
          <h3 className="">
            {pokemon.name?.charAt(0).toUpperCase() + pokemon.name?.slice(1)}
          </h3>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "10px",
            }}
          >
            {pokemon.types.map((type) => {
              return (
                <span
                  style={{
                    fontWeight: "900",
                  }}
                  key={type.type.name}
                  className={type.type.name}
                >
                  {type.type.name}
                </span>
              );
            })}
          </div>
        </Card.Body>
      </Card>
    </Link>
  );
}

export default CardPokemon;

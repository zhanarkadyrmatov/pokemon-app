import React, { useContext, useEffect, useState } from "react";
import { PokemonContext } from "../context/PokemonContext";
import { useParams } from "react-router-dom";
import { Row, Col, ProgressBar } from "react-bootstrap";
import Loading from "../Component/Loading";
function PokemonPage() {
  const { getPokemonByID } = useContext(PokemonContext);
  const [loading, setLoading] = useState(true);
  const [pokemon, setPokemon] = useState({});
  const { id } = useParams();

  const fetchPokemon = async (id) => {
    const data = await getPokemonByID(id);
    setPokemon(data);
    setLoading(false);
  };
  useEffect(() => {
    fetchPokemon(id);
  }, [id]);
  console.log(pokemon);
  return (
    <div className="container">
      {loading ? (
        <Loading />
      ) : (
        <>
          <Row className=" gap-4 gap-md-0 justify-content-center align-items-center mt-5">
            <Col md={6} lg={5}>
              <div>
                <img
                  style={{
                    width: "100%",
                    padding: "10%",
                    background: "#f2f2f2",
                    borderRadius: "10px",
                  }}
                  src={pokemon?.sprites?.other?.dream_world?.front_default}
                  alt={`Pokemon ${pokemon?.name}`}
                />
              </div>
            </Col>
            <Col md={6} lg={5}>
              <div className="">
                <div
                  style={{
                    borderBottom: "1px solid #737373",
                  }}
                  className="d-flex justify-content-start align-items-center gap-5 mb-4"
                >
                  <h6
                    style={{
                      color: "#737373",
                    }}
                  >
                    National №
                  </h6>
                  <h5 className="fw-bold">{pokemon.id}</h5>
                </div>
                <div
                  style={{
                    borderBottom: "1px solid #737373",
                  }}
                  className="d-flex justify-content-start align-items-center gap-5 mb-4"
                >
                  <h6
                    style={{
                      color: "#737373",
                    }}
                  >
                    Name
                  </h6>
                  <h4 className="fw-bold">
                    {pokemon.name?.charAt(0).toUpperCase() +
                      pokemon.name?.slice(1)}
                  </h4>
                </div>
                <div
                  style={{
                    borderBottom: "1px solid #737373",
                  }}
                  className="d-flex justify-content-start align-items-center gap-5 mb-4"
                >
                  <h6
                    style={{
                      color: "#737373",
                    }}
                  >
                    Type
                  </h6>
                  <div className=" d-flex gap-4">
                    {pokemon.types?.map((type) => (
                      <span
                        style={{
                          fontWeight: "900",
                        }}
                        key={type.type.name}
                        className={`${type.type.name}`}
                      >
                        {type.type.name}
                      </span>
                    ))}
                  </div>
                </div>
                <div
                  style={{
                    borderBottom: "1px solid #737373",
                  }}
                  className="d-flex justify-content-start align-items-center gap-5 mb-4"
                >
                  <h6
                    style={{
                      color: "#737373",
                    }}
                  >
                    Weight
                  </h6>
                  <h5 className="fw-bold">{pokemon.weight}</h5>
                </div>
                <div
                  style={{
                    borderBottom: "1px solid #737373",
                  }}
                  className="d-flex justify-content-start align-items-center gap-5 mb-4"
                >
                  <h6
                    style={{
                      color: "#737373",
                    }}
                  >
                    Height
                  </h6>
                  <h5 className="fw-bold">{pokemon.height}</h5>
                </div>
              </div>
            </Col>
          </Row>
          <h2 className="text-center mt-5">Base stats</h2>
          <Row className="justify-content-center align-items-center gap-2 mt-2  mb-5">
            {pokemon.stats?.map((item) => {
              return (
                <>
                  <Col className="" md={12} lg={8}>
                    <Row className="d-flex justify-content-center align-items-center ">
                      <Col sm={5} md={3} className="">
                        <h5
                          style={{
                            color: "#737373",
                          }}
                        >
                          {item.stat.name}
                        </h5>
                      </Col>
                      <Col sm={6} md={9}>
                        <ProgressBar
                          style={{
                            width: "100%",
                          }}
                          animated
                          label={`${item.base_stat}%`}
                          now={item.base_stat}
                        />
                      </Col>
                    </Row>
                  </Col>
                </>
              );
            })}
          </Row>
        </>
      )}
    </div>
  );
}

export default PokemonPage;

import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Navigation from "./Component/Navigation";
import HomePage from "./pages/HomePage";
import PokemonPage from "./pages/PokemonPage";

function AppPouter() {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<HomePage />} />
        <Route path="pokemon/:id" element={<PokemonPage />} />
      </Route>
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

export default AppPouter;

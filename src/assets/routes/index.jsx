import React from "react";
import {
  BrowserRouter,
  Routes as Switch,
  Route,
  Navigate,
} from "react-router-dom";
import Home from "../pages/home";
const Rotas = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/home" element={<Home />} />
        <Route path="*" element={<Navigate to="/home" />} />
      </Switch>
    </BrowserRouter>
  );
};

export default Rotas;

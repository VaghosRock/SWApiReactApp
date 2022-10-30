import React from "react";
import "../Stylesheet/Nombres.css";

function Personajes({ personajes, planets }) {
  return (
    <div className="row row-cols-2 row-cols-md-2 g-4 mt-2 d-flex">
      {personajes.map((personaje) => (
        <div className="col  ">
          <div className="card text-bg-dark">
            <h1 className="card-title">{personaje.name}</h1>
            <hr />
            <h5 className="card-text">Homeworld: {personaje.homeworld}</h5>
            <p className="card-text">Gender: {personaje.gender}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Personajes;

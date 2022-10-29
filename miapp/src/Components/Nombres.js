import React from "react";
import "../Stylesheet/Nombres.css";

function Nombres({ personajes }) {
  return (
    <div className="row">
      <div className="col">
        {personajes.map((personaje) => (
          <div className="card text-bg-dark mb-3">
            <h1 className="card-title">{personaje.name}</h1>
            <hr/>
            <p className="card-text">{personaje.gender}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Nombres;

import { useState } from "react";

function Planeta({ url }) {
  const [planet, setPlanet] = useState("");

  fetch(url)
    .then((res) => res.json())
    .then((data) => setPlanet(data.name));

  return <h5 className="card-text">Homeworld: {planet}</h5>;
}

export default Planeta;

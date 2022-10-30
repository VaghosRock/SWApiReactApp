import "./App.css";
import { useState, useEffect } from "react";
import Personajes from "./Components/Personajes";
import Navbar from "./Components/Navbar";
import Pagination from "./Components/Pagination";

function App() {
  const urlInicial = "https://swapi.dev/api/people";
  const [datos, setDatos] = useState([]);
  const [personajes, setPersonajes] = useState([]);
  const [planets, setPlanets] = useState([]);
  function fetchApi(url) {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setDatos(data);
        setPersonajes(data.results);
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  
  
  useEffect(() => {
    fetchApi(urlInicial);
  }, []);

  function nextPag() {
    fetchApi(datos.next);
  }
  function prevPag() {
    fetchApi(datos.previous);
  }
  
  return (
    <>
      <Navbar />
      <Pagination prev={datos.previous} next={datos.next} nextPag={nextPag} prevPag={prevPag} />
      <Personajes personajes={personajes} planets={planets} />
      <Pagination prev={datos.previous} next={datos.next} nextPag={nextPag} prevPag={prevPag} />
    </>
  );
}

export default App;

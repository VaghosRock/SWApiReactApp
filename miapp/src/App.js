import "./App.css";
import { useState, useEffect } from "react";
import Nombres from "./Components/Nombres";


function App() {
  const urlInicial = "https://swapi.dev/api/people";
  const [url, setUrl] = useState(urlInicial);
  const [datos, setDatos] = useState([]);
  const [personajes, setPersonajes] = useState([]);
  function fetchApi(url) {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setDatos(data);
        setPersonajes(data.results);
        console.log(data);
      })
      .catch((error) => {
        throw error;
      });
  }
  useEffect(() => {
      fetchApi(url);
  }, []);

  return (
    <>
      <div className="App">Star Wars Cards</div>

      <Nombres personajes={personajes} />
    </>
  );
}

export default App;

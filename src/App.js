import React, { useEffect, useState } from "react";
import "./App.css";
import getGifs from "./services/getGifs";
import ListOfGifs from "./Components/ListOfGifs";

function App() {
  const [gifs, setGifs] = useState([]);

  // cambiar el gif cada vez que se actualice el estado y se renderiza el componente
  useEffect(function () {
    //en getGifs se hace el fetch
    getGifs({ keyword: "cats" }).then((gifs) => setGifs(gifs));
  }, []);
  //cuidado con el loop infinito, hay que entrar las dependiencias de este efecto
  //si no tiene dependencias el array viene vacío y el efecto se produce solo una vez

  return (
    <div className="App">
      <section className="App-content">
        <ListOfGifs gifs={gifs} />
      </section>
    </div>
  );
}

export default App;

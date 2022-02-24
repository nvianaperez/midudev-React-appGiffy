import React from "react";
import "./App.css";
import ListOfGifs from "./Components/ListOfGifs";
//utilizamos wouter en vez de router.
//wouter es un paquete que pesa bastante menos que router y no tiene dependencias
//npm install wouter (porque y inicié el proyecto con npm)--> si hemos creado la app con yarn seguir con yarn porque sino npm instalaría toooodas las dependencias de cero otra vez.
import { Link, Route } from "wouter";

function App() {
  return (
    <div className="App">
      <section className="App-content">
        <h1>App</h1>
        <Link to="gif/cats">Gifs de gatos</Link>
        <Link to="gif/perros">Gifs de perros</Link>
        <Link to="gif/pandas">Gifs de pandas</Link>
        <Route path="/gif/:keyword" component={ListOfGifs} />
      </section>
    </div>
  );
}

export default App;

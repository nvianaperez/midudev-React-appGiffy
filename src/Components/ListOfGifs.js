import React, { useState, useEffect } from "react";
import Gif from "../Components/Gif";
import getGifs from "../services/getGifs";

export default function ListOfGifs({ params }) {
  //dentro del objeto params me guarda las keywords
  const { keyword } = params;

  const [gifs, setGifs] = useState([]);

  // cambiar el gif cada vez que se actualice el estado y se renderiza el componente
  useEffect(
    function () {
      //en getGifs se hace el fetch
      getGifs({ keyword }).then((gifs) => setGifs(gifs));
    },
    [keyword]
  );
  //cuidado con el loop infinito, hay que entrar las dependiencias de este efecto
  //si no tiene dependencias el array viene vacío y EL EFECTO SE PRODUCE SOLO UNA VEZ!
  //esta keyword es una dependencia del proyecto
  //porque cada vez que se cambie la prop que le llega (keyword) se vuelva a llamar al efecto y se vuelve a renderizar

  return (
    <div>
      gifs.map(({(title, id, url)}) =>
      <Gif key={id} id={id} title={title} url={url} />)
    </div>
  );
}

/* {gifs.map((singleGif) => (
          <Gif
            key={singleGif.id}
            title={singleGif.title}
            url={singleGif.url}
            id={singleGif.id}
          />
    ))} */

import React from "react";
import Gif from "./Components/Gif";

export default function ListOfGifs({ gifs }) {
  return gifs.map(({ title, url, id }) => (
    <Gif key={id} id={id} title={title} url={url} />
  ));
}

/* {gifs.map((singleGif) => (
          <Gif
            key={singleGif.id}
            title={singleGif.title}
            url={singleGif.url}
            id={singleGif.id}
          />
    ))} */

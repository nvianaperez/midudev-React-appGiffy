import React from "react";

export default function Gif({ title, id, url }) {
  return (
    <div>
      <h4>{title}</h4>
      <small>{id}</small>
      <img src={url} key={id} alt={title} />
    </div>
  );
}

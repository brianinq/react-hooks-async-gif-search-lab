import React from "react";

export default function GifList({ list }) {
  return (
    <ul>
      {list.map((gif) => (
        <li>
          <img src={gif.images.original.url} alt={gif.title} />
        </li>
      ))}
    </ul>
  );
}

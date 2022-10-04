import react, { useState, useEffect } from "react";
import GifList from "./GifList";
import GifSearch from "./GifSearch";

export default function GifListContainer() {
  const [gifs, setGifs] = useState([]);
  const style = {
    display: "flex",
    justifyContent: "space-between",
  };
  function searchHandler(query) {
    fetch(`https://api.giphy.com/v1/gifs/search?q=${query}&api_key=stgrin93Kv634txIucoXkwpNiZtC5Mmv&rating=g`)
      .then((res) => res.json())
      .then((results) => setGifs(results.data.slice(0, 5)));
  }
  useEffect(() => {
    fetch(`https://api.giphy.com/v1/gifs/trending?api_key=stgrin93Kv634txIucoXkwpNiZtC5Mmv&rating=g`)
      .then((res) => res.json())
      .then((results) => setGifs(results.data.slice(0, 3)));
  }, []);
  return (
    <div style={style}>
      <GifList list={gifs} />
      <GifSearch searchHandler={searchHandler} />
    </div>
  );
}

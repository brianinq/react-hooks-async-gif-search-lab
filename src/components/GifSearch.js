import React, { useState } from "react";

export default function GifSearch({ searchHandler }) {
  const [search, setSearch] = useState("");
  const formStyle = {
    display: "flex",
    flexDirection: "column",
    gap: "5px",
    marginRight: "20px",
  };
  const btnStyle = {
    background: "green",
    border: "none",
    color: "#fff",
    padding: "5px 20px",
    marginRight: "auto",
  };
  const inputStyle = {
    color: "#000",
    padding: "3px",
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        searchHandler(search);
        setSearch("");
      }}
      style={formStyle}
    >
      <label htmlFor="name">Enter a search term:</label>
      <input style={inputStyle} type="text" name="search" id="name" value={search} onChange={(e) => setSearch(e.target.value)} />
      <button style={btnStyle} type="submit">
        Find
      </button>
    </form>
  );
}

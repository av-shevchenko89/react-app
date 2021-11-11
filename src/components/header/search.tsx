import React, { useState, useEffect } from "react";
import { Btn } from "../../shared";

export function Search() {
  const [value, setSearchVal] = useState("");

  useEffect(() => {}, []);

  const searchMovie = () => {};

  return (
    <div className="search">
      <input
        type="text"
        placeholder="What do you want to watch?"
        className="form-control"
        value={value}
        onChange={(e) => setSearchVal(e.target.value)}
      />
      <Btn label="Search" onClick={() => searchMovie()} />
    </div>
  );
}

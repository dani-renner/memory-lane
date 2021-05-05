import Unsplash, { toJson } from 'unsplash-js';
import { createApi } from 'unsplash-js';
import React, { useState } from "react";
import fetch from 'node-fetch';
global.fetch = fetch;



const unsplash = new Unsplash({
  accessKey: `${process.env.REACT_APP_UNSPLASH_API_KEY}`,
  fetch,
});

function SearchPhotos() {
  const [query, setQuery] = useState("");
  const [pics, setPics] = useState([]);

  const searchPhotos = async (e) => {
    e.preventDefault();
    unsplash.search
      .photos(query, 1, 20)
      .then(toJson)
      .then((json) => {
        setPics(json.results);
      });
  };
  return (
    <>
    <form className="form">
        <label className="label" htmlFor="query">
          {" "}
        </label>
        <input
          type="text"
          name="query"
          className="input"
          placeholder={`Try "dog" or "apple"`}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button type="submit" className="button">
          Search
        </button>
      </form>
      <form className="form" onSubmit={searchPhotos}></form>
    </>
  );
}

export default SearchPhotos;
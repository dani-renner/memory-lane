import React, { useState } from "react";
import Unsplash, { toJson } from "unsplash-js";

export default function SearchPhotos() {
  const [query, setQuery] = useState("");
  const [pics, setPics] = useState([]);

  const searchPhotos = async (e) => {
    e.preventDefault();
    unsplash.search
      .photos(query)
      .then(toJson)
      .then((json) => {
        setPics(json.results);
      });
  };
  return (
    <>
      <form className="form" onSubmit={searchPhotos}></form>
    </>
  );
}
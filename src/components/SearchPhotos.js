import Unsplash, { toJson } from 'unsplash-js';
import { createApi } from 'unsplash-js';
import React, { useState, useEffect } from "react";
import fetch from 'node-fetch';
global.fetch = fetch;

// const unsplash = new Unsplash({
//   accessKey: process.env.REACT_APP_UNSPLASH_API_KEY
//   // fetch: nodeFetch,
// });

function SearchPhotos() {
  const [query, setQuery] = useState("");
  const [pics, setPics] = useState([]);


  const searchPhotos = async (e) => {
    e.preventDefault();
    fetch(`https://api.unsplash.com/search/photos/?client_id=${process.env.REACT_APP_UNSPLASH_API_KEY}&query=${query}&page=1&per_page=1&order_by=latest`)
    .then((response) => {
    setPics(response) 
    })
    .catch(console.log)
  }
// for (let i = 0; i < 20; i++) {
//   //  array.push(fetchResponse.results[i].urls.full);

// }
//  fetchResponse.results[i].urls.full






  // const apiURL = `https://api.unsplash.com/search/photos/?client_id=${process.env.REACT_APP_UNSPLASH_API_KEY}&query=${query}}`;
    // const searchPhotos = async () => {
    //     fetch(apiURL)
    //     // .then(response => response.json())
    //     .then((result) => {
    //       setPics(result.json) 
    //     })
    //     .catch(console.log)
    //     }

  // useEffect(() => {
  //   unsplash.search
  //     .getPhotos({ query: `${query}`})
  //     .then(result => {
  //       setPics(result);
  //     })
  //     .catch(() => {
  //       console.log("something went wrong!");
  //     });
  // }, []);

  // const searchPhotos = async (e) => {
  //   e.preventDefault();
  //   unsplash.search
  //     .getPhotos({
  //       query: query,
  //       page: 1,
  //       perPage: 20
  //     })
  //     .then(result => {
  //       setPics(result);
  //     })
  // };
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
    
    {pics &&
      <div className="card-list">
        {pics.map((memoryImage) => 
          <div className="card">
            <img
              className="card--image"
              alt={memoryImage.alt_description}
              src={memoryImage.urls.full}
              width="50%"
              height="50%"
            />
          </div>)
        }
      </div>
    } 
    </>
  );
}

export default SearchPhotos;
import React from "react";
import { movies } from "../data";

function Movies() {
  return <>
  <h1>Movies Page</h1>
  <div>{movies.map(movie => <div key = {movie.title}>
    {movie.title}
    {movie.time}
    <ul>
      <li>{movie.genres}</li>
    </ul>
  </div>)}</div>
  </>;
}

export default Movies;

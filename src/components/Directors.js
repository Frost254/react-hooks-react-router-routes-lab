import React from "react";
import { directors } from "../data";

function Directors() {
  return <>
  <h1>Directors Page</h1>
  <div>{directors.map(director => <div key = {director.name}>
    {director.name}
    <ul>
      <li>{director.movies}</li>
    </ul>
  </div>)}</div>
  </>;
}

export default Directors;

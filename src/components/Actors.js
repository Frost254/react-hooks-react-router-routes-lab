import React from "react";
import { actors } from "../data";

function Actors() {
  return  <>
  <h1>Actors Page</h1>
  <div>{actors.map(actor => <div key = {actor.name}>
    {actor.name}
    <ul>
      <li>{actor.movies}</li>
    </ul>
  </div>)}</div>
  </>;
}

export default Actors;

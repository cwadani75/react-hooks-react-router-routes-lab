// src/components/Actors.js
import React from "react";
import { actors } from "../data";

function Actors() {
  return (
    <div>
      <h1>Actors Page</h1>
      {actors.map((actor) => (
        <div key={actor.name}>
          <h3>{actor.name}</h3>
          <ul>
            {actor.movies.map((movie, idx) => (
              <li key={idx}>{movie}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default Actors;

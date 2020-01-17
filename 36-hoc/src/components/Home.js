import React from "react";
import { Link } from "react-router-dom";

function Home(props) {
  return (
    <>
      <h1>
        <span role="img" aria-label="racecar">
          🏎️
        </span>
        ...neeeyyyooooowwwwwwwmmmmm
      </h1>
      <Link className="btn btn-info" to="/races" onClick={() => props.onGetRaces()}>
        See races
      </Link>
    </>
  );
}

export default Home;

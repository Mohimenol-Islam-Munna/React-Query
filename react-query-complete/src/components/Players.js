import React from "react";
import { useQuery } from "react-query";
import axios from "axios";

// useQuery accept two arguments
// 1. unique name
// 2. a function
// 3. useQuery return an object with many properties

const getPlayers = () => {
  return axios.get("http://localhost:4400/players");
};

const Players = () => {
  const { isLoading, error, data } = useQuery("Players", getPlayers);

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  return (
    <div>
      <h2>Players List</h2>
      {data?.data.map((player) => (
        <div
          style={{
            width: "40%",
            padding: "10px",
            backgroundColor: "lightgray",
            margin: "10px auto 0px",
          }}
        >
          <h3>Name : {player.name}</h3>
          <h4>Jersy : {player.jersy}</h4>
        </div>
      ))}
    </div>
  );
};

export default Players;
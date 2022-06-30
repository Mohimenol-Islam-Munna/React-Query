import React from "react";
import { useQuery } from "react-query";
import axios from "axios";

// useQuery accept two arguments
// 1. unique name
// 2. a function
// 3. useQuery return an object with many properties
// 4. is's accept third option like object which configure more things, loke cache time

const getPlayers = () => {
  return axios.get("http://localhost:4400/players");
};

const Players = () => {
  const { isLoading, isError, error, data, isFetching } = useQuery(
    "Players",
    getPlayers,
    {
      // defalut cache time is 5 minutes
      cacheTime: 60000,
    }
  );

  console.log("isLoading ::::: isFetching", isLoading, ":::::", isFetching);

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  if (isError) {
    console.log("error ::", error);
    return <h2>{error.message}</h2>;
  }

  return (
    <div>
      <h2>Players List</h2>
      {data?.data.map((player) => (
        <div
          key={player.id}
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

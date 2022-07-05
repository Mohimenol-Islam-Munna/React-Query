import React from "react";
import { useQuery } from "react-query";
import axios from "axios";

// useQuery accept two required  arguments
// 1. unique name
// 2. a function
// 3. useQuery return an object with many properties
// 4. is's accept third option like object which configure more things, loke cache time
// 5. useQuery automatically refetch data after every 5 minutes

const getPlayers = () => {
  return axios.get("http://localhost:4400/players");
};

const Players = () => {
  const { isLoading, isError, error, data, isFetching, refetch } = useQuery(
    "Players",
    getPlayers,
    {
      // cacheTime
      // It refetch data in background after certain time
      // defalut cache time is 5 minutes
      // cacheTime: 60000,
      // --------
      // staleTime
      // It stop background refetch for specific time
      // default value of staleTime is 0
      // there is no background fetching between 30000 mili second
      // staleTime: 30000,
      // --------
      // refetchOnMount
      // It fetch data when component is mount. This is like similar to any react component data fetching.
      // It has three value true(fetch data every rendering/mount), false(fetch data in initial rendering/mount), always (fetch data every rendering/mount)
      // refetchOnWindowFocus
      // It has three vlaue like refetchOnMount. default value is true
      // refetchOnWindowFocus: true,
      // --------
      // polling
      // Its used for continuous data fetching
      // refetchInterval polling data on every specific interval
      // refetchInterval: 2000,
      // It dont refetch data if window/browser lose focus
      // For always fetching data it take helps of refetchIntervalInBackground
      // refetchIntervalInBackground: true,
      // --------
      // enabled true or false. when its value is false then it's initial call in component render or mount is paused.
      // Then we call this by button click. Default value is true .
      enabled: false,

      // data transformation 
      select: (data) => {
        const playerName = data?.data.map((player) => player.name);
        return playerName;
      },

      onSuccess: (data) => {
        console.log("data fetch successful ::", data);
      },
      
      onError: (err) => {
        console.log("data fetch does not successful ::", err);
      },
    }
  );


  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  if (isError) {
    return <h2>{error.message}</h2>;
  }

  return (
    <div>
      <h2>Players List</h2>
      <button onClick={refetch}>Get Player List</button>

      {/* normal data showing  */}
      {/* {data?.data.map((player) => (
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
      ))} */}

      {/* transformation  */}
      {data &&
        data.map((playerName, index) => (
          <div
            key={index}
            style={{
              width: "40%",
              padding: "10px",
              backgroundColor: "lightgray",
              margin: "10px auto 0px",
            }}
          >
            <h3>Name : {playerName}</h3>
          </div>
        ))}
    </div>
  );
};

export default Players;

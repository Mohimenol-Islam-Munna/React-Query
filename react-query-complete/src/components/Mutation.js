import React from "react";
import { useMutation } from "react-query";
import axios from "axios";

const mutationHandler = () => {
  return axios.post("url", data);
};

const Mutation = () => {
  const { mutate, isLoading, isError, isSuccess } =
    useMutation(mutationHandler);

  const mutateHandler = (data) => {
    mutate(data);
  };

  return (
    <div>
      <h2>Mutation</h2>
      <button onClick={() => mutateHandler({ name: "Munna", sub: "CSE" })}>
        Create SomeThings
      </button>
    </div>
  );
};

export default Mutation;

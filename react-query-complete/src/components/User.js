import React from "react";
import { useQueryClient, useQuery, useMutation } from "react-query";

const User = () => {
  const queryClient = useQueryClient();

  const result = useQuery(
    "Users",
    "https://jsonplaceholder.typicode.com/posts"
  );

  console.log("result ::", result);

  return <div>User List</div>;
};

export default User;

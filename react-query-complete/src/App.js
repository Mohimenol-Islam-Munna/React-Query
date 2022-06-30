import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import "./App.css";

import User from "./components/User";

// creact query client
const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <h2>React Query Practice</h2>
        <div>
          <User />
        </div>
      </div>
    </QueryClientProvider>
  );
};

export default App;

import React from "react";
import ReactDOM from "react-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import Normalize from "react-normalize";

import { StoresProvider } from "stores";
import { App } from "./App";

const queryClient = new QueryClient();

ReactDOM.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <Normalize />
      <StoresProvider>
        <App />
      </StoresProvider>
    </QueryClientProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

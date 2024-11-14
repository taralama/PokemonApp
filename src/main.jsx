import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";

import { Provider } from "react-redux";
import { store } from "./Reduxstorage/store.js";
import { UserContextProvider } from "./Components/Context/UserProvider.jsx";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <Provider store={store}>
          <UserContextProvider>
            <App />
          </UserContextProvider>
        </Provider>
      </QueryClientProvider>
    </BrowserRouter>
  </StrictMode>
);

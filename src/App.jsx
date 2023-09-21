import { useState } from "react";
import { createRoot } from "react-dom/client";
import SearchParams from "./SearchParams.jsx";
import { Link, BrowserRouter, Routes, Route } from "react-router-dom";
import Details from "./Details.jsx";
import AdoptedPetContext from "./AdoptedPetContext.js";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
      cacheTime: Infinity,
    },
  },
});

const App = () => {
  const adoptedPet = useState(null);
  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <AdoptedPetContext.Provider value={adoptedPet}>
          <header>
            <Link to="/">Adopt Me!</Link>
          </header>
          <h1>Adopt Me!</h1>
          <Routes>
            <Route path="/details/:id" element={<Details />} />
            <Route path="/" element={<SearchParams />}></Route>
          </Routes>
        </AdoptedPetContext.Provider>
      </QueryClientProvider>
    </BrowserRouter>
  );
};

// let's go make something real
const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);

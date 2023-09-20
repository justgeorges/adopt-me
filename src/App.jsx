import { createRoot } from "react-dom/client";
import SearchParams from "./SearchParams.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Details from "./Details.jsx";

const App = () => {
  // return React.createElement("div", {}, [
  //   React.createElement("h1", {}, "Adopt Me!"),
  //   React.createElement(Pet, {
  //     animal: "cat",
  //     name: "Ben",
  //     breed: "Orange Tabby",
  //   }) old code

  return (
    <BrowserRouter>
      <h1>Adopt Me!</h1>
      <Routes>
        <Route path="/details/:id" element={<Details />} />
        <Route path="/" element={<SearchParams />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

// let's go make something real
const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);

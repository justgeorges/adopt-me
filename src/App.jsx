import { createRoot } from 'react-dom/client';
import SearchParams from './SearchParams'

const App = () => {

  // return React.createElement("div", {}, [
  //   React.createElement("h1", {}, "Adopt Me!"),
  //   React.createElement(Pet, {
  //     animal: "cat",
  //     name: "Ben",
  //     breed: "Orange Tabby",
  //   }) old code

  return (
  <div>
    <h1>Adopt Me!</h1>
    <SearchParams/>
  </div>
  )
};

// let's go make something real
const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);

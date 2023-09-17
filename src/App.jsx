import { createRoot } from 'react-dom';
import Pet from "./Pet.jsx"

const App = () => {

  // return React.createElement("div", {}, [
  //   React.createElement("h1", {}, "Adopt Me!"),
  //   React.createElement(Pet, {
  //     animal: "cat",
  //     name: "Ben",
  //     breed: "Orange Tabby",
  //   }) old code
  <div>
    <h1>Adopt Me!</h1>
    <Pet name="Luna" animal="dog" breed="Havanese" />
    <Pet name="Ben" animal="cat" breed="Orange Tabby" />
    <Pet name="Doink" animal="bird" breed="Cockatiel" />
  </div>

};

// let's go make something real
const container = document.getElementById("root");
const root = createRoot(container);
root.render(React.createElement(App));

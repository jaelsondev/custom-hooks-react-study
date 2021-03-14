import Counter from "./components/Counter";
import Pokemon from "./components/Pokemon";
import Subscription from "./components/Subscription";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Counter />
      <Pokemon pokemonName="pikachu" />
      <Pokemon pokemonName="zapdos" />
      <Subscription />
    </div>
  );
}

export default App;

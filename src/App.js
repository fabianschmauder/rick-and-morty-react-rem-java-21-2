import "./App.css";
import Header from "./components/Header";
import CharacterCard from "./components/CharacterCard";
import { useState } from "react";
import { loadCharacters } from "./service/api-service";

function App() {
  const [response, setResponse] = useState({
    results: [],
  });

  const [searchString, setSearchString] = useState("");

  const filteredCharacters = response.results.filter((character) =>
    character.name
      .toLocaleLowerCase()
      .includes(searchString.toLocaleLowerCase())
  );

  function loadData() {
    loadCharacters().then((data) => setResponse(data));
  }

  return (
    <div className="App">
      <Header />
      <input
        value={searchString}
        onChange={(event) => {
          setSearchString(event.target.value);
        }}
      />
      <button onClick={() => setSearchString("")}>clear</button>
      <button onClick={() => loadData()}>load data</button>

      {filteredCharacters.map((character) => (
        <CharacterCard key={character.id} character={character} />
      ))}
    </div>
  );
}

export default App;

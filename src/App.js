import "./App.css";
import Header from "./components/Header";
import CharacterCard from "./components/CharacterCard";
import { useState } from "react";
import { loadCharacters } from "./service/api-service";

function App() {
  const [characters, setCharacters] = useState([]);
  const [error, setError] = useState();
  const [isLoading, setIsLoading] = useState(false);

  const [searchString, setSearchString] = useState("");

  const filteredCharacters = characters.filter((character) =>
    character.name
      .toLocaleLowerCase()
      .includes(searchString.toLocaleLowerCase())
  );

  function loadData() {
    setIsLoading(true);
    loadCharacters()
      .then((data) => setCharacters(data.results))
      .catch((error) => setError(error))
      .finally(() => setIsLoading(false));
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
      {isLoading && <div>Loading ... </div>}
      {error && <div>Some error accrued!! {error.message}</div>}
      {filteredCharacters.map((character) => (
        <CharacterCard key={character.id} character={character} />
      ))}
    </div>
  );
}

export default App;

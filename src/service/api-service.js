export function loadCharacters() {
  return fetch("https://rickandmortyapi.com/api/character").then((response) =>
    response.json()
  );
}

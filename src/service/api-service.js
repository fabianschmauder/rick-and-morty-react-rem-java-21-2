import axios from "axios";

export function loadCharacters() {
  return axios
    .get("https://rickandmortyapi.com/api/character")
    .then((response) => response.data);
}

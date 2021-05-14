import styled from "styled-components/macro";

const CardContainer = styled.section`
  padding: 10px;
  display: flex;

  align-items: center;

  img {
    max-width: 50px;
    border-radius: 20px;
  }

  h2 {
    color: black;
  }
`;

function CharacterCard({ character }) {
  return (
    <CardContainer>
      <img src={character.image} alt={character.name} />
      <div>
        <h2>{character.name}</h2>
        <div>{character.species}</div>
      </div>
    </CardContainer>
  );
}

export default CharacterCard;

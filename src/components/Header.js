import styled from "styled-components/macro";

const AppTitle = styled.h1`
  background-color: aqua;
  color: deeppink;
`;

const SuperHeader = styled(AppTitle)`
  box-shadow: inset 5em 1em gold;
`;

function Header() {
  return (
    <>
      <AppTitle>Rick and Morty Header</AppTitle>
      <SuperHeader>Super header</SuperHeader>
    </>
  );
}

export default Header;

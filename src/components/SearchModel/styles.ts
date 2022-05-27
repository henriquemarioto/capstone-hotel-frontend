import styled from "styled-components";

export const MainDiv = styled.div`
  button:hover {
    cursor: pointer;
  }
`;

export const TitleSection = styled.section`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  position: relative;

  h1 {
    font-size: 26px;
  }

  button {
    background-color: rgba(0, 0, 0, 0);
    border: none;
    font-size: 19px;

    display: flex;
    align-items: center;
    justify-content: center;

    position: absolute;
    left: 0;
    top: 0;
    padding: 0;
  }
`;

export const SearchSection = styled.section`
  height: 60px;
  display: flex;
  align-items: flex-end;
  gap: 5px;

  margin: 45px auto;
  max-width: 400px;

  input:focus {
    border: var(--beige-0) 2px solid;
    outline: 0;
  }

  form {
    width: 100%;
    display: flex;
    align-items: flex-end;
    gap: 5px;
  }

  button {
    min-width: 39px;
    width: 39px;
    height: 39px;
  }
`;
export const CardsDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin: auto;
  gap: 20px;
`;

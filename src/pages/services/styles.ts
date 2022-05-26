import styled from "styled-components";

export const Container = styled.main`
  h1 {
    font-size: 26px;
    font-weight: 600;
    text-align: center;
  }
`;

export const InputContainer = styled.div`
  display: flex;
  align-items: flex-end;
  width: 80%;
  max-width: 500px;

  button {
    width: 30px;
    height: 30px;
    margin-left: 5px;
  }
`;

export const HeadingContainer = styled.div`
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`;

export const CardsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
`;

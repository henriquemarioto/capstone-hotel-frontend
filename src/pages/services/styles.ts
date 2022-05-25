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
  justify-content: center;
  align-items: flex-end;
  position: relative;
  width: 300px;

  button {
    position: absolute;
    right: -8px;
    top: 30px;
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

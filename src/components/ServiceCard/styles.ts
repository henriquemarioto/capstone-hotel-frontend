import styled from "styled-components";

export const Container = styled.div`
  width: 200px;
  padding: 10px;
  font-size: 15px;

  background-color: white;
  border: 1px solid var(--beige-1);
  border-radius: 5px;

  display: flex;
  justify-content: space-evenly;
  align-items: flex-start;
  gap: 20px;
`;

export const DivContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: flex-start;
  gap: 10px;
  width: 100%;

  p {
    word-wrap: break-word;
    width: 120px;
  }

  div{
    span{
      word-wrap: break-word;
      width: 120px;
    }
  }
`;

export const Title = styled.h2`
  display: inline;

  font-weight: bold;
`;

export const DivButtons = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  button {
    margin: 0;
    padding: 0;
    border: 0;

    width: 30px;
    height: 30px;

    border-radius: 5px;
  }
`;

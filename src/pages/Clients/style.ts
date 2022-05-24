import styled from "styled-components";

export const Container = styled.section``;

export const DivInitial = styled.div`
  display: flex;
  justify-content: space-between;

  button {
      background-color: transparent;
      border: none;
      width: 30px;
      height: 30px;
      cursor: pointer;
  }

  span {
    width: 36px;
  }
  h1 {
      font-size: 25px;
  }
`;

export const DivSearch = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: end;
  width: 90%;
  margin: 15px auto;

  button {
    margin-left: 15px;
    background-color: var(--beige-1);
    border-radius: 8px;
    border: none;
    cursor: pointer;
    height: 30px;
    width: 30px;
  }
`;

export const InputDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 80%;
  max-width: 500px;

  input {
    margin-top: 5px;
    height: 30px;
    border: 1px solid var(--beige-1);
    border-radius: 8px;
  }
`;

export const Ul = styled.ul`
  width: 95%;
  max-width: 1200px;
  height: 440px;
  overflow-y: scroll;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 5px;

  @media screen and (min-width: 1024px){
    overflow-y: hidden;
  }
`;

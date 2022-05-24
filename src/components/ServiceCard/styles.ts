import styled from "styled-components";

export const Container = styled.div`
  width: 200px;
  height: 200px;
  background-color: white;
  border: 1px solid var(--beige-1);
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: flex-start;
  padding: 12px;
  overflow: auto;

  h1 {
    font-weight: 600;
  }

  span {
    font-weight: 500;
  }
`;

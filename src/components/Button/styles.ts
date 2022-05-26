import styled from "styled-components"
import {darken} from "polished"

export const Container = styled.button`
  padding: 8px;
  border-radius: 5px;
  width: 100%;
  font-size: 16px;
  background-color: var(--beige-1);

  display: flex;
  justify-content: center;
  align-items: center;

  margin: 0;
  border: 0;

  cursor: pointer;
  transition: 0.5s;

  :hover {
    background: ${darken("0.1", "#f1dabf")};
  }
`;

import styled from "styled-components"

import {darken} from "polished"
export const StyledButton = styled.button`
  background: var(--beige-1);
  border: none;
  border-radius: 4px;
  padding: 5px;

  cursor: pointer;
  transition: 0.5s;

  :hover {
    background: ${darken("0.1", "#f1dabf")};
  }
`

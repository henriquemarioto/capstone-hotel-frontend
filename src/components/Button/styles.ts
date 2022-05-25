<<<<<<< HEAD
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
=======
import styled from 'styled-components';

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
`
>>>>>>> 5e0c1513a6122ac580f6faa8147f84a3b2b789c2

import styled from "styled-components";

export const InputDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 95%;

  input {
    height: 30px;
    border: 1px solid var(--beige-1);
    border-radius: 8px;
    padding: 5px;
    margin-top: 5px;

    :focus {
      outline: none;
    }
  }

  label {
    font-size: 14px;
  }
`;

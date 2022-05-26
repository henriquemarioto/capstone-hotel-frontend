import styled from "styled-components"

export const InputDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  max-width: 500px;

  label {
    font-size: 12px;
  }

  input {
    border: 2px solid var(--beige-1);
    width: 100%;
    border-radius: 8px;
    padding: 10px 5px;
    margin-top: 5px;

    :focus {
      outline: none;
    }
  }

  label {
    font-size: 14px;
  }
`;

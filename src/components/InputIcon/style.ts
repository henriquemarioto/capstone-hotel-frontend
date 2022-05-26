import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 350px;
  align-items: flex-start;

  label {
    font-size: 14px;
  }
`;

export const InputDiv = styled.div`
  display: flex;
  border: 1px solid var(--beige-1);
  background-color: #fff;
  border-radius: 8px;
  :focus-within {
    border: 1px solid var(--beige-1);
  }
  margin-top: 5px;

  input {
    padding: 5px;
    height: 30px;
    border: none;
    background-color: #fff;
    border-radius: 8px;

    :focus {
      outline: none;
    }
  }
`;

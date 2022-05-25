import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  max-width: 500px;

  label{
      font-size: 12px;
  }

`;

export const InputContainer = styled.div`
  margin-top: 5px;
  height: 30px;
  width: 100%;
  border: 1px solid var(--beige-1);
  border-radius: 8px;

  display: flex;
`;

export const DefaultInput = styled.input`
  width: 100%;
  height: 100%;
  padding: 0 5px;
  border-radius: 8px;

  margin: 0;
  border: none;
`;

export const Button = styled.button`
  background-color: transparent;
  border: none;

  display: flex;
  align-items: center;
  justify-content: center;
`;
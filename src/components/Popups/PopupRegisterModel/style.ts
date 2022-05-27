import styled from "styled-components";

export const Container = styled.div`
  background-color: rgba(0, 0, 0, 0.4);
  height: 100vh;
  width: 100%;
  position: fixed;
  left: 0;
  top: 0;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Background = styled.div`
  background-color: var(--vine);
  padding: 5px;
  border-radius: 5px;
  width: 260px;
`;

export const Form = styled.form`
  background-color: var(--beige-0);
  padding: 15px;
  border-radius: 5px;
  position: relative;
`;

export const Title = styled.h2`
  font-size: 18px;
  text-align: center;
`;

export const CloseButton = styled.button`
  width: 20px;
  height: 20px;
  background-color: var(--vine);
  border-radius: 5px;
  position: absolute;
  top: 8px;
  right: 8px;

  display: flex;
  justify-content: center;
  align-items: center;

  box-sizing: border-box;
  margin: 0;
  border: 0;
  cursor: pointer;

  svg {
    color: var(--beige-0);
  }
`;

export const Flex = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`

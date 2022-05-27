import styled from "styled-components";

export const ContainerDate = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;
`;

export const Label = styled.label`
  font-size: 12px;
`;

export const ContainerDateInput = styled.div`
    width: 110px;
`;

export const Start = styled.input`
  width: 100%;
  height: 30px;
  border: 2px solid var(--beige-1);
  border-radius: 5px;

  ::-webkit-inner-spin-button,
  ::-webkit-calendar-picker-indicator {
    display: none;
    -webkit-appearance: none;
  }

  box-sizing: border-box;
`;

export const End = styled(Start)``;

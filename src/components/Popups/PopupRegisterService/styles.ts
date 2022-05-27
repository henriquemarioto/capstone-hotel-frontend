import styled from "styled-components";

export const ContainerTextArea = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  max-width: 500px;

  label {
    font-size: 12px;
  }

  textarea {
    margin-top: 5px;
    height: 90px;
    width: 100%;
    border: 1px solid var(--beige-1);
    border-radius: 8px;

    padding: 5px;
  }
`;
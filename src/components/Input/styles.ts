<<<<<<< HEAD
import styled from "styled-components"

export const Container = styled.div`
  width: 220px;
  input {
    width: 240px;
    margin-top: 12px;
    border: 2px solid var(--beige-1);
    padding: 6px;
    border-radius: 6px;
    ::placeholder {
      color: #c0c0c0;
      font-size: 12px;
    }
  }
`
=======
import styled from "styled-components";

export const InputDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  max-width: 500px;

  label{
      font-size: 12px;
  }

  input {
    margin-top: 5px;
    height: 30px;
    width: 100%;
    border: 1px solid var(--beige-1);
    border-radius: 8px;

    padding: 0 5px;
  }
`;
>>>>>>> 5e0c1513a6122ac580f6faa8147f84a3b2b789c2

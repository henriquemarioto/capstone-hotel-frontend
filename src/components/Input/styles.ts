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

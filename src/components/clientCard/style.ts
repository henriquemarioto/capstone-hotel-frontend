import styled from "styled-components";

export const Container = styled.section`
  width: 250px;
  height: 115px;
  border-radius: 8px;
  padding: 2px;
  border: 2px solid var(--beige-1);
`;

export const Section = styled.section`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 100%;
`;

export const Ul = styled.ul`
  display: flex;
  flex-direction: column;

  h2 {
    margin-bottom: 10px;
    font-weight: 600;
  }

  li {
    margin-bottom: 3px;
  }

  li {
    p {
      span {
        font-weight: 600;
        font-size: 15px;
      }
    }
  }
`;

export const Buttons = styled.div`
    display: flex;
    height: 100%;
    flex-direction: column;
    align-items: flex-start;

    button {
        background-color: transparent;
        border: none;
        cursor: pointer;
        margin-bottom: 15px;
    }
`
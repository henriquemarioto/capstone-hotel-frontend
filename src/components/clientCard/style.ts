import styled from "styled-components";


export const Li = styled.li`
  display: flex;
  justify-content: space-around;
  width: 250px;
  border: 2px solid var(--beige-1);
  border-radius: 8px;
  background-color: #fff;
  padding: 10px;
`;

export const DivClient = styled.div`

  display: flex;
  flex-direction: column;
  gap: 10px;

  h2 {
    font-weight: 600;
    font-size: 15px;
  }

  p {
    font-size: 15px;
    span {
      font-weight: 600;
    }
  }
`;

export const Buttons = styled.div`
    display: flex;
    height: 100%;
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;


    button {
        background-color: transparent;
        border: none;
        cursor: pointer;
    }
`
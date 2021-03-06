import styled from "styled-components";

interface Props {
  status?: boolean;
  admin?: boolean;
}

export const Li = styled.li`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 250px;
  height: 120px;
  border: 2px solid var(--beige-1);
  border-radius: 8px;
  margin-bottom: 10px;
  background-color: #fff;
`;

export const DivClient = styled.div`
  h2 {
    font-weight: 600;
    font-size: 15px;
    margin-bottom: 5px;
  }

  p {
    margin-bottom: 5px;
    font-size: 15px;
    span {
      font-weight: 600;
    }
  }
  div {
    display: flex;

    span {
      margin-right: 5px;
      font-weight: 600;
    }
  }
`;

export const Buttons = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 15px;

  button {
    background-color: transparent;
    border: none;
    cursor: pointer;
    margin-bottom: 15px;
  }
`;

export const Status = styled.p<Props>`
  font-size: 15px;
  color: ${(props) => (props.status ? "green" : "red")};
`;

export const Admin = styled.p<Props>`
  font-size: 15px;
  color: ${(props) => (props.admin ? "green" : "red")};
`;

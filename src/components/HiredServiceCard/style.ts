import styled from "styled-components";

interface Props {
  paid: boolean;
}

export const Li = styled.li`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 250px;
  height: 140px;
  border: 2px solid var(--beige-1);
  border-radius: 8px;
  margin-bottom: 10px;
  background-color: #fff;
`;

export const DivContract = styled.div`
  h2 {
    font-size: 15px;
    margin-bottom: 5px;
    span {
      font-weight: 600;
    }
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

export const Status = styled.p<Props>`
  font-size: 15px;
  color: ${(props) => (props.paid ? "green" : "red")};
`;

import styled from "styled-components";

interface Props {
  paid: boolean;
}

export const Li = styled.li`
  position: relative;

  display: flex;
  flex-direction: column;
  justify-content: space-around;
  gap: 5px;

  width: 250px;
  border: 2px solid var(--beige-1);
  border-radius: 8px;
  padding: 10px;
  background-color: #fff;

  h2 {
    font-size: 15px;
    span {
      font-weight: 600;
    }
  }

  p {
    font-size: 15px;
    span {
      font-weight: 600;
    }
  }
  div {
    display: flex;

    span {
      font-weight: 600;
    }
  }
`;

export const DivContract = styled.div`
  
`;

export const Paid = styled.p<Props>`
  font-size: 15px;
  color: ${(props) => (props.paid ? "green" : "red")};
`;

export const Pay = styled.button`
  margin: 0;
  padding: 0;
  border: 0;

  width: 30px;
  height: 30px;
  border-radius: 5px;

  position: absolute;
  top: 10px;
  right: 10px;
`
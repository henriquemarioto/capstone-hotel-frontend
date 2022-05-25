import styled from "styled-components";

export const Container = styled.div`
  height: 100%;

  display: flex;
  align-items: center;
`;

export const Image = styled.img`
  display: none;
`;

export const Menu = styled.section`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

export const ContainerContent = styled.section`
  transition: 0.4s;
  display: flex;
  flex-direction: column;

  width: 280px;
  background-color: var(--beige-1);
  border-radius: 5px;
  padding: 5px;

  div {
    display: flex;
    align-items: center;
  }

  @media (min-width: 560px) {
    width: 350px;
    font-size: 20px;
    span {
      padding: 15px;
    }
  }
`;

export const ContainerItem = styled.button`
  display: flex;
  align-items: center;
  gap: 10px;

  padding: 10px;
  background-color: var(--beige-1);

  border: 0;
  margin: 0;

  cursor: pointer;

  :hover{
    > div{
      background-color: var(--beige-0);
    }
  }
`;

export const ContainerPlus = styled.div`
  width: 35px;
  height: 35px;
  background-color: var(--white-0);
  border-radius: 5px;

  display: flex;
  align-items: center;
  justify-content: center;

  transition: 0.2s;
`;

export const Admin = styled.section`
  margin-top: 100px;
  transition: 0.4s;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  width: 320px;
  height: 400px;
  background-color: var(--beige-1);
  border-radius: 5px;
  div {
    display: flex;
    align-items: center;
  }
  span {
    margin: 0 10px;
    font-weight: 500;
  }
  span {
    transition: 0.4s;
    padding: 10px;
    background-color: var(--white-0);
    border-radius: 5px;
    cursor: pointer;
    margin-left: 20px;
  }
  span:hover {
    transition: 0.4s;
    background-color: var(--beige-dark);
  }
  @media (min-width: 560px) {
    width: 350px;
    height: 400px;
    font-size: 20px;
    span {
      padding: 15px;
    }
  }

  @media (min-width: 930px) {
    margin-top: 0;
  }
`;

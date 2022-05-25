import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  background-image: url("./src/img/Hotel_Wood.png");
  background-size: 100%;
  background-repeat: no-repeat;
  object-fit: fill;
`;

export const Card = styled.section`
  transition: 0.4s;
  height: 394px;
  width: 256px;
  padding: 25px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: var(--white-0);
  border-radius: 5px;
  border: 2px solid var(--beige-1); 
  h1 {
    font-size: 30px;
    margin-bottom: 10px;
    font-weight: 500;
  }
  @media (min-width: 720px) {
    transition: 0.4s;
    height: 400px;
    width: 400px;
  }
`;
export const Icon = styled.img`
  margin-right: 5px;
  width: 25px;
  height: 25px;
`;
export const Inputs = styled.section`
  display: flex;
  flex-direction: column;
  text-align: left;
  label {
    font-size: 15px;
    margin-bottom: 5px;
  }
  input {
    transition: 0.4s;
    width: 200px;
    height: 35px;
    background: var(--white-200);
    border: 1px solid var(--beige-1);
    border-radius: 5px;
    margin-bottom: 20px;
  }
  .password {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 200px;
    height: 35px;
    background: var(--white-200);
    border: 1px solid var(--beige-1);
    input {
      margin-top: 20px;
      border: none;
      width: 190px;
    }
    @media (min-width: 720px) {
      width: 300px;
      input {
        width: 290px;
      }
    }
  }
  button {
    transition: 0.4s;
    margin-top: 20px;
    width: 200px;
    height: 35px;
    background-color: var(--beige-1);
    border: none;
    border-radius: 5px;
    font-size: 15px;
    font-weight: 500;
  }
  button:hover {
    transition: 0.4s;
    background-color: var(--beige-dark);
    color: var(--white-0);
  }
  @media (min-width: 720px) {
    input {
      width: 300px;
    }
    button {
      width: 300px;
    }
  }
`;

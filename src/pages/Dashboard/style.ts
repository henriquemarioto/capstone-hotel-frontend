import styled from "styled-components";

export const Main = styled.main`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  padding: 15px;

  img {
    display: none;

    @media screen and (min-width: 1024px){
      display: block
    }
  }
`


export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 30px;
  width: 100%;
  max-width: 250px;
  padding: 30px 15px;
  background-color: var(--beige-1);
  justify-content: space-evenly;
  border-radius: 8px;
  margin: auto;
  `

export const DivSession = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  cursor: pointer;

  p {
    margin-right: 15px;
    margin-left: 15px;
    border: none;
    background-color: transparent;
  }
`

export const ButtonChat = styled.button`
  position: fixed;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: red;
  bottom: 15px;
  right: 15px;
  border: none;
  background-color: var(--beige-1);

  svg {
    width: 100%;
    height: 50%;
  }
`
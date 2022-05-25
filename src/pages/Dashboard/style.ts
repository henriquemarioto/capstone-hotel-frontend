import styled from "styled-components";

export const Main = styled.main`
  display: flex;
  justify-content: space-between;
  align-items: center;
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
  width: 100%;
  height: 300px;
  max-width: 250px;
  background-color: var(--beige-1);
  justify-content: space-evenly;
  border-radius: 8px;
  margin: 15px auto;
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


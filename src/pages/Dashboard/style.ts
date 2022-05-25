import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
body {
   display: flex;
   align-items: center;
   justify-content: center;
   .background{
      display: none;
      margin-top: 60px;
      margin-left: -20px;
    }
   @media (min-width: 930px) {
    .background{
      display: flex;
    }
  }
    @media (min-width:  1400px) {
    .background{
      display: flex;
      height: 600px;
    }
  }
}

`
export const Menu = styled.section`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`
export const Container = styled.section`
  margin-top: 200px;
  transition: 0.4s;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  width: 280px;
  height: 165px;
  background-color: var(--beige-1);
  border-radius: 5px;
  div{
      display: flex;
      align-items: center;
  }
  p{
    margin: 0 10px;
    font-weight: 500;
  }
  span{
      transition: 0.4s;
      padding: 10px;
      background-color: var(--white-0);
      border-radius: 5px;
      cursor: pointer;
      margin-left: 20px;
  }
  span:hover{
    transition: 0.4s;
    background-color: var(--beige-dark);
  }
  @media (min-width: 560px) {
   width: 350px;
   height: 200px;
   font-size: 20px;
   span{
     padding: 15px;
   }
  }

`
export default GlobalStyle
  
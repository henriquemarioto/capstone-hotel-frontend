import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
body {
   display: flex;
   margin-top: 40px;
   justify-content: center;
}
`
export const Container = styled.section`
  transition: 0.4s;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 280px;
  height: 165px;
  background-color: var(--beige-1);
  border-radius: 5px;
  div{
      display: flex;
  }
  span{
      padding: 5px;
      background-color: var(--white-0);
      border-radius: 5px;
  }
`
export default GlobalStyle

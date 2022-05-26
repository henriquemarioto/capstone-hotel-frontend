import styled from "styled-components";

export const Ul = styled.ul`
  width: 95%;
  max-width: 1200px;
  height: 440px;
  overflow-y: scroll;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 5px;

  @media screen and (min-width: 1024px){
    overflow-y: hidden;
    height: 100%;
  }
`;

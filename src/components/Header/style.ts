import styled from 'styled-components'
export const HeaderDiv = styled.header`
  display: flex;
  align-items: center;
  padding: 0 var(--margin);

  width: 100%;
  height: 10vh;
  background-color: var(--beige-1);

  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
  }

  .col-left {
    font-size: 16px;
    font-weight: 500;

    display: flex;
    align-items: center;
    gap: 5px;
    
    img{
      width: 36px;
      height: 36px;
    }
  }

  .col-right {
    display: none;
  }

  @media screen and (min-width: 600px) {
    .menu-bar {
      display: none;
    }

    .col-right {
      display: flex;
      list-style: none;

      li {
        border: none;
        background-color: transparent;
        font-family: 'Montserrat', sans-serif;
        font-size: 12px;
        margin: 0 10px;
        padding: 5px 5px;
        border-bottom: 1px solid black;

        :hover {
          cursor: pointer;
          filter: invert(55%);
        }
      }
    }
  }

  @media screen and (min-width: 750px) {
     .col-right li {
          font-size: 16px;
      }
  }
  
`

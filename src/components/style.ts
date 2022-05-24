import styled from 'styled-components'
export const HeaderDiv = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 60px;
  background-color: var(--beige-1);

  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 92%;
  }

  .col-left {
    font-size: 18px;
    font-weight: bold;
  }

  .col-right {
    display: none;
  }

  .menu-bar {
    display: inline;
    cursor: pointer;
  }

  @media screen and (min-width: 900px) {
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
        font-size: 16px;
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
`

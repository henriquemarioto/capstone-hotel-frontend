import styled from "styled-components"

export const MainDiv = styled.div`
  button:hover {
    cursor: pointer;
  }
`

export const TitleSection = styled.section`
  display: flex;
  width: 75%;
  justify-content: space-evenly;
  align-items: center;
  margin: 20px auto 30px 20px;

  h1 {
    font-size: 26px;
  }

  button {
    background-color: rgba(0, 0, 0, 0);
    border: none;
    font-size: 19px;
  }
`

export const SearchSection = styled.section`
  width: 300px;
  height: 60px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  margin: 45px auto;

  p {
    font-size: 12px;
  }

  input {
    border: var(--beige-1) 2px solid;
    width: 250px;
    height: 40px;
    margin-right: 3px;
    border-radius: 5px;
  }

  input:focus {
    border: var(--beige-0) 2px solid;
    outline: 0;
  }

  form {
    display: flex;
    align-items: center;
  }

  button {
    width: 35px;
    height: 38px;
    background-color: var(--beige-1);
    border-radius: 5px;
    border: rgba(0, 0, 0, 0) 1px solid;
    font-size: 20px;
  }
`
export const BedroomsDiv = styled.div`
  width: 90%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
  margin: auto;
`

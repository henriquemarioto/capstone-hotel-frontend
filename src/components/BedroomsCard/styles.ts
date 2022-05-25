import styled from "styled-components"

interface Props {
  clients: number
  capacity: number
}

// substituir cores por variáveis de cor, substituir fonte

export const Container = styled.div`
  width: 150px;
  height: 150px;
  margin: 5px;
  display: flex;
  justify-content: space-between;
  padding: 10px;
  border: #f1dabf 3px solid;
  border-radius: 5px;
`
export const StyledUl = styled.ul`
  width: 120px;
  height: 120px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  font-size: 15px;

  li {
    list-style: none;
    font-weight: 700;
  }

  span {
    font-weight: 400;
  }
`
export const Circle = styled.div<Props>`
  width: 10px;
  height: 10px;
  border-radius: 100px;
  ${(props) => {
    if (props.capacity - props.clients === 0) {
      return `
      background-color: red;
    `
    } else if (props.capacity - props.clients === props.capacity) {
      return `
      background-color: green;
    `
    } else {
      return `
        background-color: yellow;
    `
    }
  }}
`

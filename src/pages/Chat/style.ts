import styled from "styled-components";

export const Container = styled.main`
  height: 350px;
  width: 100%;
  max-width: 500px;
  display: flex;
  margin: 0 auto;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  background-color: rgba(0,0,0,0.1);
  padding: 10px;
  border-radius: 8px;

  @media screen and (min-width: 1024px){
      height: 400px;
  }
`;

export const DivMessage = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 500px;
`;

export const SectionMessages = styled.section`
  width: 100%;
  height: 300px;
  overflow-y: scroll;
`;

export const MessageOwner = styled.div`
  width: 250px;
  max-width: 50%;
  border-radius: 8px;
  display: flex;
  padding: 5px;
  flex-direction: column;
  justify-content: center;

  background-color: green;
  margin-right: auto;
  margin-left: 10px;
  margin-bottom: 5px;
  word-wrap: break-word;
`;
export const MessageReceived = styled.div`
  width: 250px;
  max-width: 50%;
  border-radius: 8px;
  padding: 5px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  background-color: grey;
  margin-left: auto;
  margin-right: 10px;
  margin-bottom: 5px;
  word-wrap: break-word;
`;

export const Username = styled.p`
  font-size: 18px;
  color: var(--beige-1);
  font-weight: 600;
  margin-bottom: 5px;
  word-wrap: break-word;
`;
export const Message = styled.p`
    font-size: 15px;
    margin-bottom: 5px;
    word-wrap: break-word;
`
export const Hour = styled.span`
    font-size: 12px;
`

export const Title = styled.h2`
    margin-bottom: 10px;
`
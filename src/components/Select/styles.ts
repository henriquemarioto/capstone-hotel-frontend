import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  max-width: 500px;

  label {
    font-size: 12px;
  }

  select {
    margin-top: 5px;
    height: 30px;
    width: 100%;
    border: 1px solid var(--beige-1);
    border-radius: 8px;

    padding: 0 5px;
  }
`;
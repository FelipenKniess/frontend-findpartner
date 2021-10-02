import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 40px;
    text-transform: uppercase;
  }
  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 40px;
    padding: 50px;
    background: #0C0E13;
    border-radius: 20px;
    gap: 20px;

    textarea {
      width: 500px;
      height: 100px;
    }

    button {
      width: 400px;
    }

  }
`;

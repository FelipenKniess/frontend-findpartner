import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 40px;

  h1 {
    margin-top: 40px;
  }

  .container {
    display:flex;
    justify-content: space-between;
    gap: 50px;
    .content-register {
      display: flex;
      flex-direction: column;
      gap: 10px;
    }
  }

  .storage-interests {
    width: 400px;
  }

  .storage-interests, .register-interest, .list-interests {
    background: #DCDCDC;
    border-radius: 20px;
    padding: 20px;

    h2 {
      font-size: 20px;
      color: #0f7a64;
      font-weight: bold;
      text-align: center;
    }

    form {
      display: flex;
      flex-direction: column;
      align-items: center;
      height: 100%;
      padding: 20px
    }

    .addInterest {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-top: 15px;
      gap: 10px;

      button {
        width: 200px;
      }

      div {
        width: 200px;
      }
    }

    .title-interests {
      display: block;
      margin-top: 10px;
    }

    .content-interests {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: center;
      margin-top: 15px;
      gap: 10px;

      div {
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        gap: 5px;
        background: #0f7a64;
        border-radius: 10px;
        padding:10px;
        font-size: 15px;
        transition: background 0.2s;

        span {
          display: flex;
        }

        &:hover {
          background: ${shade(0.2, '#0f7a64')};
        }
      }
    }

    .buttonSubmit {
      margin-top: auto;
      width: 200px;
    }
  }
`;

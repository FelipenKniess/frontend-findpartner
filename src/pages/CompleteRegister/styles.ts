import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top:40px;
    margin-bottom:40px;
    text-transform: uppercase;
  }

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 50px;
    background: #DCDCDC;
    border-radius: 20px;
    gap: 20px;

    @media(max-width: 1000px){
      padding: 20px;
      width: 300px;
    }

    textarea {
      width: 500px;
      height: 100px;
      resize: none;
    }

    label {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      img {
        width: 300px;
        height: 200px;
        border-radius: 40px;
        @media(max-width: 1000px){
          width: 250px;
        }
      }

      input {
        margin-top: 10px;
        @media(max-width: 1000px){
          width: 230px;
        }
      }
    }

    .address {
      display: flex;
      flex-direction: column;
      color: #29292e;
      width: 100%;
      gap: 10px;
      > div {
        gap: 30px;
        display: flex;
        justify-content: space-between;
        @media(max-width: 1000px){
          flex-direction: column;
        }
        div {
          flex: 1;
          span {
            display: block;
            margin-bottom: 8px;
            font-size: 12px;
          }
        }
      }
    }

    button {
      width: 400px;
      @media(max-width: 1000px){

      width: 200px;
      }
    }

  }
`;

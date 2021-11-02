import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  .container {
    margin-top: 40px;
    margin-bottom: 40px;

    h1 {
      text-align: center;
      font-size: 25px;
    }
    > div {
      display:flex;
      gap: 50px;

      .list-connections {
        background: #0C0E13;
        width: 500px;
        margin-top: 20px;
        padding: 30px;
        border-radius: 20px;

        h2 {
          font-size: 20px;
        }
        ul {
          list-style: none;
          margin-top: 10px;
          max-height: 300px;
          overflow: auto;
          li {
            display: flex;
            align-items: center;
            gap: 10px;
            cursor: pointer;
            border-radius: 10px;
            padding: 10px;
            transition: 0.3s background;

            img {
              width: 40px;
              height: 40px;
              border-radius: 50px;
            }
            &:hover {
              background: #108AEE;
            }
          }
        }
      }
    }
  }
`;

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
        background: #DCDCDC;
        width: 500px;
        margin-top: 20px;
        padding: 30px;
        border-radius: 20px;

        h2 {
          font-size: 20px;
          color: #29292e;
        }
        ul {
          list-style: none;
          margin-top: 20px;
          max-height: 300px;
          overflow: auto;
          a {
            color: #29292e;
            display: flex;
            align-items: center;
            gap: 10px;
            cursor: pointer;
            border-radius: 10px 10px 0px 0px;
            border-bottom: 1px solid #29292e;
            padding: 10px;
            transition: 0.3s background;

            img {
              width: 40px;
              height: 40px;
              border-radius: 50px;
            }

            .acess-profile {
              opacity: 0;
              margin-left: auto;
              color: #000;
              text-decoration: underline;
            }

            &:hover {
              background: #108AEE;
              .acess-profile {
                opacity: 1;
              }
            }
          }
        }
      }
    }
  }
`;

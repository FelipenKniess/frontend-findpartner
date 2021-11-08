import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  .container {
    margin-top: 40px;
    margin-bottom: 40px;

    h1 {

      text-align: center;
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
          color: #29292e;
          font-size: 20px;
        }
        ul {
          list-style: none;
          margin-top: 20px;
          max-height: 300px;
          overflow: auto;
          li {
            display: flex;
            align-items: center;
            color: #29292e;
            border-radius: 10px 10px 0px 0px;
            border-bottom: 1px solid #29292e;
            gap: 10px;
            cursor: pointer;
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

import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 40px;

  .container {
    display: flex;
    gap: 25px;

    .box {
      display: flex;
      flex-direction: column;
      padding: 40px;
      background: #0C0E13;
      border-radius: 20px;
      gap: 30px;

      h3 {
        font-size: 24px;
        color: #13997E;
      }

      p {
        font-size: 16px;
      }

      .tel {
        display: flex;
        gap: 10px;
        svg {
          color: #13997E;
        }
      }
      .data {
        font-size: 14px;
        color: #CCC;
      }

      .interesses {
        margin-top: auto;
        h4 {
          margin-bottom: 10px;
        }
        .content {
          display: flex;
          flex-wrap: wrap;
          gap: 20px;

          div {
            padding: 5px 10px;
            background: #13997E;
            border-radius: 20px;

            span {
              font-size: 14px;
            }
          }
        }
      }
    }
    .image-profile {
      img {
        width: 400px;
        height: 400px;
      }
    }
  }

`;

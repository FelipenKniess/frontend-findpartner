import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 40px;
  margin-bottom: 40px;

  .container {
    display: flex;
    flex-direction: column;
    width: 100%;

    > div {
        display: flex;
        gap: 25px;
        width: 100%;
        justify-content: space-between;

        .box {
          display: flex;
          flex: 1;
          flex-direction: column;
          padding: 40px;
          background: #DCDCDC;
          border-radius: 20px;
          gap: 30px;

          h3 {
            font-size: 24px;
            font-weight: bold;
            color: #13997E;
          }

          p {
            font-size: 16px;
            color: #656e7b;
          }

          .tel {
            span {
              display: flex;
              gap: 10px;
              color: #656e7b;
              svg {
                color: #656e7b;
              }
            }
          }
          .data {
            font-size: 14px;
            color: #656e7b;
          }

          .interesses {
            margin-top: auto;
            color: #656e7b;

            h4 {
              margin-bottom: 10px;
            }
            .content {
              display: flex;
              flex-wrap: wrap;
              gap: 20px;

              div {
                padding: 5px 10px;
                color: #FFF;
                background: #13997E;
                border-radius: 20px;

                span {
                  font-size: 14px;
                }
              }
            }
          }

          .address {
            display: flex;
            gap: 8px;
            color: #656e7b;
            img {
              width:20px;
            }
          }

          .email {
            display: flex;
            color: #656e7b;
            gap: 8px;

            svg {
              color: #656e7b;
            }
          }
        }
        .image-profile {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 10px;
          img {
            border-radius: 20px;
            border: 1px solid #656e7b;
            width: 400px;
            height: 400px;
          }
        }
      }

      .list-products {
        display: flex;
        gap: 20px;
        color: #29292e;
        flex-wrap: wrap;
        background: #DCDCDC;
        border-radius: 25px;
        padding: 10px;
        > div {
          display:flex;
          flex-direction: column;
          align-items: center;
          gap: 5px;
          background: ${shade(0.2, '#DCDCDC')};
          border-radius: 10px;
          img {
            width: 275px;
            height: 275px;
            border-radius: 0px 0px 25px 25px;
          }

          span {
            display:block;
            font-size: .9375em;
            font-weight: 700;

            &.price {
              font-size: 17px;
            }
          }
        }
      }
    }
    h5 {
      color: #29292e;
      margin: 25px;
      font-size: 20px;
      font-weight: bold;
    }
`;

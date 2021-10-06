import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 40px;
  margin-bottom: 40px;

  .users {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap: 25px;

    .user {
      display: flex;
      flex-direction: column;
      cursor: pointer;
      padding: 5px;
      border-radius: 10px;
      transition: 0.2s background;
      &:hover{
        background: ${shade(0.2, '#1F1D2B')};
      }
      img {
        width: 250px;
        height: 250px;
        border-radius: 20px;
      }

      .name-user {
        margin-top: 5px;
        margin-left: 5px;
        font-size: 14px;
        color: #13997E;
      }

      .tel-user{
        color: #13997E;
        display: flex;
        align-items: center;
        gap: 5px;
        /* justify-content: center; */
        margin-top: 5px;
        margin-left: 5px;
        font-size: 14px;
        color: #FFF;
        /* line-height: 2px; */
      }
    }
  }
`;

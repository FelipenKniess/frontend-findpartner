import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 40px;
  margin-bottom: 40px;

  h1 {
    text-align: center;
    font-size: 25px;
  }

  .filters {
    form {
      display: flex;
      background: #DCDCDC;
      padding: 20px;
      border-radius: 20px;
      gap: 10px;

      @media(max-width: 1000px){
        flex-direction: column;
      }
    }
  }
  .users {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap: 25px;
    margin-top: 25px;

    .user {
      display: flex;
      flex-direction: column;
      cursor: pointer;
      padding: 5px;
      border-radius: 10px;
      transition: 0.2s background;
      background: #FFF;
      border: 1px solid #0C0E13;

      &:hover{
        background: ${shade(0.1, '#FFF')};
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
        color: #29292e;
        /* line-height: 2px; */
      }
    }
  }
`;

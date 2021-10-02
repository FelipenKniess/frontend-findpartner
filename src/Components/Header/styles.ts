import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  background: #0C0E13;
  justify-content: space-between;
  padding: 20px 150px;
  font-size: 18px;

  @media(max-width:767px){
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    gap: 30px;
  }
  a, button, span {
    color: hsl(222deg 5% 52%);
    transition: 0.2s color;
    cursor: pointer;
    &:hover {

      color: hsl(222deg 14% 90%);
    }
  }

  .links {
    display: flex;
    align-items: center;
    gap: 25px;
  }

  .logout {
    display: flex;
    gap: 40px;

    button {
      background: none;
      border: none;
      display: flex;
      align-items: center;
      gap: 5px;

      &:hover {
        color: #E31C5E;
      }

      svg {
        color: #E31C5E;
      }
    }
  }
`;

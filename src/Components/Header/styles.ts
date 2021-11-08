import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  background: #FFF;
  justify-content: space-between;
  padding: 20px 150px;
  font-size: 18px;
  border: 1px solid #13997E;

  @media(max-width:767px){
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    gap: 30px;
  }
  a, button, span {
    color: #29292e;
    transition: 0.2s color;
    cursor: pointer;
    &:hover {
      color: #13997E;
    }
  }

  .links {
    display: flex;
    align-items: center;
    gap: 25px;

    a {
      &.current {
        color: #13997E;
      }
    }
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

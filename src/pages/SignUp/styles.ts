import styled, { keyframes } from 'styled-components';
import { shade } from 'polished';
import signUpBackgroundImg from '../../assets/images/background-login.png';

export const Container = styled.div`
    display: flex;
    height: 100vh; //adiciona 100% da tela para o usuário
    align-items: stretch;

    @media(max-width: 1000px){
        justify-content: center;
        height: inherit;
    }
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    place-content: center;
    width: 100%;
    max-width: 50%;
`;

const appearFromRight = keyframes`
    from {
        opacity: 0;
        transform: translateX(50px);
    }
    to {
        opacity: 1;
        transform: translateX(0);
    }
`;

export const AnimationContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    animation: ${appearFromRight} 1s;

    .logo {
        width: 230px;
        height: 134px;
    }

    form {
        display: flex;
        flex-direction: column;
        margin-top: 40px;
        width: 340px;

        @media(max-width: 1000px){
            padding: 20px;
        }
        .user-type {
          margin-bottom: 10px;
          display: flex;
          color: #29292e;
          justify-content: center;
          align-items: center;
          gap: 20px;
          font-size: 17px;

          div {
            margin-top: inherit;
          }
        }

        div {
            & + div {
                margin-top: 8px;
            }
        }

        button {
            margin-top: 16px;
        }

        h1 {
            font-size: 24px;
            color: #29292e;
            text-align:center;
            margin-bottom: 24px;
        }

        a {
            color: #F4EDE8;
            display: block;
            margin-top: 24px;
            text-decoration: none;
            transition: color 0.2s;
            text-align: center;

            &:hover {
                color: ${shade(0.2, '#F4EDE8')}
            }
        }
    }

    .create-account {
        color: #13997E;
        display: flex;
        align-items: center;
        margin-top: 24px;
        text-decoration: none;
        transition: color 0.2s;
        text-align: center;
        transition: color 0.2s;

        &:hover {
            color: ${shade(0.2, '#13997E')};
        }

        svg {
            margin-right: 16px;
        }
    }
`;

export const Background = styled.div`
    flex: 1;
    background: url(${signUpBackgroundImg}) no-repeat center;
    background-size: cover;
    @media(max-width: 1000px){
        display: none;
    }
`;

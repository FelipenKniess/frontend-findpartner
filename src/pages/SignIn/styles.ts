import styled, { keyframes } from 'styled-components';
import { shade } from 'polished';
import signInBackgroundImg from '../../assets/images/background-login.png';

export const Container = styled.div`
    display: flex;
    height: 100vh; //adiciona 100% da tela para o usuário
    align-items: stretch;

`;
export const Background = styled.div`
    flex: 1;
    background: url(${signInBackgroundImg}) no-repeat center;
    background-size: cover;

`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    place-content: center;
    width: 100%;
    max-width: 850px;

`;

const appearFromLeft = keyframes`
    from {
        opacity: 0;
        transform: translateX(-50px);
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

    animation: ${appearFromLeft} 1s;

    .logo {
        width: 230px;
        height: 134px;

    }

    form {
        display: flex;
        flex-direction: column;
        margin-top: 80px;
        width: 340px;


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
            color: #F4EDE8;
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
        color: #ff9000;
        display: flex;
        align-items: center;
        margin-top: 24px;
        text-decoration: none;
        transition: color 0.2s;
        text-align: center;
        transition: color 0.2s;

        &:hover {
            color: ${shade(0.2, '#ff9000')};
        }

        svg {
            margin-right: 16px;
        }
    }
`;

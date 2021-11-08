import styled from 'styled-components';

export const Container = styled.div`
    display: flex;

    h1 {
        text-align: center;
        font-size: 25px;
        color: #29292e;
        margin: 40px;
    }

    button {
        display: block;
        width: initial;
        height: 35px;
        margin-left: auto;
    }

    .container {
        display: flex;
        flex-direction: column;
        gap: 10px;
    }

    table {
        th{
            text-align: center;
        }
        img {
            width: 200px;
            height: 200px;
        }
    }

`;

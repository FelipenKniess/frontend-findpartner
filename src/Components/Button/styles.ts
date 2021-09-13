import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.button`

    background: #13997E;
    height: 56px;
    width: 100%;
    border-radius: 10px;
    border: 0;
    padding: 0 16px;
    color: #312E38;
    font-weight: 500;
    transition: background 0.2s;

    &:hover {
        background: ${shade(0.2, '#13997E')};
    }

`;

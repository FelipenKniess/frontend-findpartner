import styled, { css } from 'styled-components';
import Tooltip from '../Tooltip';

interface containerProps {
    isFocused: Boolean;
    isFilled: Boolean;
    isErrored: Boolean;
}

export const Container = styled.div<containerProps>`
    background: #FFF;
    display:flex;
    width: 100%;
    padding: 16px;
    border-radius: 10px;
    border: 2px solid #232129;
    color: #29292e;

    @media(max-width: 1000px){

    }

    ${(props) => props.isErrored
        && css`
            border-color: #c53030;
        `
}

    > svg {
        margin-right: 16px;

        ${(props) => props.isFilled
            && css`
                color: #13997E;
            `
}
    }


    ${(props) => props.isFocused
        && css`
            border-color: #13997E;
            color: #13997E;

        `
}

    input {
        flex: 1;
        background: transparent;
        color: #29292e;
        border: 0;

        &::placeholder {
            color: #666360;
        }
    }
`;

export const Error = styled(Tooltip)`
    height: 20px;
    color: #c53030;

    span {
        background: #c53030;
        color: #fff;

        &::before {
            border-color: #c53030 transparent;
        }
  }
`;

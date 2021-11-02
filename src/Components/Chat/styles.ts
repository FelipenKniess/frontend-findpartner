import Styled from 'styled-components';

export const Container = Styled.div`
    display:flex;

    .container {
        background: #0C0E13;
        width: 500px;
        display: flex;
        flex-direction:column;
        margin-top: 20px;
        padding: 30px;
        border-radius: 20px;

        ul {
            list-style:none;
            display: flex;
            overflow: auto;
            max-height: 300px;
            flex-direction: column;
            gap: 10px;

            li {
                display: flex;
                gap: 5px;
                border-radius: 5px;

                &.mine {
                    margin-left: auto;
                    /* background: red; */
                }

                &.other {
                    /* background: red; */
                    margin-right: auto;
                }
            }
        }

        form{
            margin-top: auto;
        }
    }
`;

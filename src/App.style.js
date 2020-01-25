import styled from 'styled-components';

export const Main = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Contact = styled.div`
    padding-top: 20vh;
    text-align: center;
    & > p {
        font-size: 1.1rem;
        padding-bottom: 10px;
        margin: 0;
    }
    & > h2 {
        font-size: 1.7rem;
        margin-bottom: 10px;
    }
    & > .icons > a {
        font-size: 1.5rem;
        padding: 10px;
    }
`;

export const Info = styled.div`
    padding-top: 20vh;
    width: 40%;

    & > h2 {
        font-size: 1.7rem;
        margin-bottom: 10px;
    }

    & > p {
        font-size: 1.1rem;
        padding-bottom: 10px;
        margin: 0;
    }

    & > a {
        display: block;
        padding: 5px;
        padding-left: 0;
    }
`;
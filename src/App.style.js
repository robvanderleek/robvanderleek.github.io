import styled from 'styled-components';

export const Main = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    
    @media (min-width: 1060px) {
        height: 100%;
        flex-direction: row;
    }
`;

export const Contact = styled.div`
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
    width: 60%;
    @media (min-width: 1060px) {
        width: 40%;
    }
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
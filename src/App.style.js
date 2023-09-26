import {styled} from "@mui/material/styles";

export const Main = styled('div')`
    height: 100%;
`;

export const Contact = styled('div')`
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

export const Info = styled('div')`
    margin-top: 1em;
    margin-bottom: 1em;
    width: 70%;
    @media (min-width: 1060px) {
        width: 40%;
    }
    & > h2 {
        font-size: 1.7rem;
        margin-bottom: 10px;
    }

    & > p {
        font-size: 1.2rem;
        padding-bottom: 10px;
        margin: 0;
    }

    & > a {
        display: block;
        padding: 5px;
        padding-left: 0;
    }
`;

export const ProfileImage = styled('img')`
    margin-top: 1em;
    margin-bottom: 1em;
`;
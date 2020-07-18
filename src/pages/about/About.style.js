import styled from "styled-components";

export const AboutArea = styled.div`
    margin-top: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    
    @media (min-width: 1060px) {
        margin-top: unset;
        height: 100%;
        flex-direction: row;
    }
`;
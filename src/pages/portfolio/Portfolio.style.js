import styled from "styled-components";
import Card from "@material-ui/core/Card";

export const PortfolioCardArea = styled(Card)`
    width: 80%;
    @media (min-width: 1060px) {
        max-width: 600px;
    }
    margin-top: 20px;
    margin-bottom: 20px;
`;

export const PortfolioCardMedia = styled.img`
    width: 100%;
    height: 300px;
    object-fit: contain;
    filter: grayscale(1);
    &:hover {
        filter: none;
        transition: 1.5s;
    }
`;
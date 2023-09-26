import React, {ReactNode} from "react";
import {PortfolioCardArea, PortfolioCardMedia} from "./Portfolio.style";
import PropTypes from 'prop-types';
import {CardActionArea, CardContent, CardHeader, CardMedia} from "@mui/material";

interface PortfolioCardProps {
    title: string;
    year: string;
    image: any;
    url?: string;
    children: ReactNode;
}

export default function PortfolioCard(props: PortfolioCardProps) {
    const {url, title, year, image, children} = props;

    const getCardContent = () => {
        return (
            <React.Fragment>
                <CardHeader title={title} subheader={year}/>
                <CardMedia>
                    <PortfolioCardMedia src={image}/>
                </CardMedia>
                <CardContent>
                    {children}
                </CardContent>
            </React.Fragment>
        );
    }

    const getActiveCard = () => {
        return (
            <CardActionArea onClick={() => url && window.open(url, "_blank")}>
                {getCardContent()}
            </CardActionArea>
        );
    }

    return (
        <PortfolioCardArea>
            {url && getActiveCard()}
            {!url && getCardContent()}
        </PortfolioCardArea>
    );
}

PortfolioCard.propTypes = {
    title: PropTypes.string.isRequired,
    year: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    url: PropTypes.string
}
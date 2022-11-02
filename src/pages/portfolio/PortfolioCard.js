import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import React from "react";
import {PortfolioCardArea, PortfolioCardMedia} from "./Portfolio.style";
import CardActionArea from "@material-ui/core/CardActionArea";
import PropTypes from 'prop-types';
import CardMedia from "@material-ui/core/CardMedia";

export default function PortfolioCard(props) {
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
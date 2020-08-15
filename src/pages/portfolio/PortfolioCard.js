import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import React from "react";
import {PortfolioCardArea, PortfolioCardMedia} from "./Portfolio.style";
import CardActionArea from "@material-ui/core/CardActionArea";
import PropTypes from 'prop-types';
import CardMedia from "@material-ui/core/CardMedia";

export default function PortfolioCard(props) {
    return (
        <PortfolioCardArea>
            <CardActionArea onClick={() => window.open(props.url, "_blank")}>
                <CardHeader title={props.title} subheader={props.year}/>
                <CardMedia>
                    <PortfolioCardMedia src={props.image} />
                </CardMedia>
                <CardContent>
                    {props.children}
                </CardContent>
            </CardActionArea>
        </PortfolioCardArea>
    );
}

PortfolioCard.propTypes = {
    title: PropTypes.string.isRequired,
    year: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
}
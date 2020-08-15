import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import React from "react";
import {PortfolioCardArea} from "./Portfolio.style";
import CardActionArea from "@material-ui/core/CardActionArea";
import Hyperlink from "../../components/Hyperlink";
import PropTypes from 'prop-types';

export default function PortfolioCard(props) {
    return (
        <PortfolioCardArea>
            <CardActionArea onClick={() => window.open(props.url, "_blank")}>
                <CardHeader title={props.title} subheader={props.year}/>
                <CardMedia style={{height: '300px', objectFit: 'contain'}} component="img" image={props.image}/>
                <CardContent>
                    {props.children}
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Hyperlink href={props.url}>
                    <Button size="small" color="secondary">
                        Open
                    </Button>
                </Hyperlink>
            </CardActions>
        </PortfolioCardArea>
    );
}

PortfolioCard.propTypes = {
    title: PropTypes.string.isRequired,
    year: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
}
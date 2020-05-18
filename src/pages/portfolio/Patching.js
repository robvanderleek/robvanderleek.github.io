import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import patching from "../../static/media/patching.png";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import React from "react";
import {PortfolioCard} from "./Portfolio.style";

export default function Patching() {
    return (
        <PortfolioCard>
            <CardHeader title="Patching" subheader="2020"/>
            <CardMedia component="img" image={patching}/>
            <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                    Timeline of awesome apps from Glitch.com
                </Typography>
            </CardContent>
            <CardActions>
                <a href="https://patching.io" target="_blank" rel="noopener noreferrer">
                    <Button size="small" color="secondary">
                        Go to Patching.io
                    </Button>
                </a>
            </CardActions>
        </PortfolioCard>
    );
}
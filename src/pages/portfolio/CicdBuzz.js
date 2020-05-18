import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import cicdbuzz from "../../static/media/cicd-buzz.jpg";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import {PortfolioCard} from "./Portfolio.style";
import React from "react";

export default function CicdBuzz() {
    return (
        <PortfolioCard>
            <CardHeader
                title="How to build a modern CI/CD pipeline"
                subheader="2017"
            />
            <CardMedia component="img" image={cicdbuzz}/>
            <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                    Post on Medium that shows how to setup a modern CI/CD pipeline using free and hosted services.
                </Typography>
            </CardContent>
            <CardActions>
                <a href="https://medium.com/bettercode/how-to-build-a-modern-ci-cd-pipeline-5faa01891a5b">
                    <Button size="small" color="secondary">
                        Read it on Medium
                    </Button>
                </a>
            </CardActions>
        </PortfolioCard>
    );
}
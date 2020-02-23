import Card from "@material-ui/core/Card";
import React from "react";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import cicdbuzz from "./static/media/cicd-buzz.jpg";
import styled from 'styled-components';

const PortfolioCard = styled(Card)`
    width: 80%;
    @media (min-width: 1060px) {
        max-width: 600px;
    }
    margin-top: 20px;
    margin-bottom: 20px;
`;

export default function Portfolio() {
    return (
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            <PortfolioCard>
                <CardMedia component="img" image={cicdbuzz}/>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        How to build a modern CI/CD pipeline
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        Post on Medium that shows how to setup a modern CI/CD pipeline using free and hosted services.
                    </Typography>
                </CardContent>
                <CardActions>
                    <a href="https://medium.com/bettercode/how-to-build-a-modern-ci-cd-pipeline-5faa01891a5b">
                        <Button size="small" color="primary">
                            Read it on Medium
                        </Button>
                    </a>
                </CardActions>
            </PortfolioCard>
            <PortfolioCard>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        Create Issue Branch
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        GitHub App/Action that automates the creation of issue branches on GitHub.
                    </Typography>
                </CardContent>
                <CardActions>
                    <a href="https://github.com/robvanderleek/create-issue-branch">
                        <Button size="small" color="primary">
                            Go to GitHub
                        </Button>
                    </a>
                </CardActions>
            </PortfolioCard>
        </div>
    );
}
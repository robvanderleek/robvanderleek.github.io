import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import ciblogo from "../../static/media/create-issue-branch.png";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import React from "react";
import {PortfolioCard} from "./Portfolio.style";

export default function CreateIssueBranch() {
    return (
        <PortfolioCard>
            <CardHeader
                title="Create Issue Branch"
                subheader="2019"
            />
            <CardMedia style={{height: '150px', objectFit: 'contain'}} component="img" image={ciblogo}/>
            <CardContent>
                <iframe
                    src="https://ghbtns.com/github-btn.html?user=robvanderleek&repo=create-issue-branch&type=star&count=true"
                    frameBorder="0" scrolling="0" width="150" height="20"
                    title="Star repository on GitHub"></iframe>
                <Typography variant="body2" color="textSecondary" component="p">
                    GitHub App/Action that automates the creation of issue branches on GitHub.
                </Typography>
            </CardContent>
            <CardActions>
                <a href="https://github.com/robvanderleek/create-issue-branch">
                    <Button size="small" color="secondary">
                        Go to GitHub repository
                    </Button>
                </a>
            </CardActions>
        </PortfolioCard>
    );
}
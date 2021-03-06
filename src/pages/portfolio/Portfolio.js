import React from "react";
import PortfolioCard from "./PortfolioCard";
import patchingImage from "../../static/media/patching.png";
import repoMeisterImage from "../../static/media/repomeister.png";
import ciblImage from "../../static/media/create-issue-branch.png";
import cicdbuzzImage from "../../static/media/cicd-buzz.jpg";
import Typography from "@material-ui/core/Typography";

export default function Portfolio() {
    return (
        <div style={{marginTop: '60px', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            <PortfolioCard title="Repo Meister" year="2021" image={repoMeisterImage} url="https://repomeister.com">
                <Typography variant="body1" color="textSecondary" component="p">
                    GitHub repository management made easy
                </Typography>
            </PortfolioCard>
            <PortfolioCard title="Patching" year="2020" image={patchingImage} url="https://patching.io">
                <Typography variant="body1" color="textSecondary" component="p">
                    Timeline of awesome apps from Glitch.com
                </Typography>
            </PortfolioCard>
            <PortfolioCard title="Create Issue Branch" year="2019" image={ciblImage}
                           url="https://github.com/robvanderleek/create-issue-branch">
                <iframe
                    src="https://ghbtns.com/github-btn.html?user=robvanderleek&repo=create-issue-branch&type=star&count=true"
                    frameBorder="0" scrolling="0" width="150" height="20"
                    title="Star repository on GitHub"/>
                <Typography variant="body1" color="textSecondary" component="p">
                    GitHub App/Action that automates the creation of issue branches on GitHub.
                </Typography>
            </PortfolioCard>
            <PortfolioCard title="How to build a modern CI/CD pipeline" year="2017" image={cicdbuzzImage}
                           url="https://medium.com/bettercode/how-to-build-a-modern-ci-cd-pipeline-5faa01891a5b">
                <Typography variant="body1" color="textSecondary" component="p">
                    Post on Medium that shows how to setup a modern CI/CD pipeline using free and hosted services.
                </Typography>
            </PortfolioCard>
        </div>
    );
}
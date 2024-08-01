import {CenteredContent, Contact, Info, ProfileImage} from "../../App.style";
import profile_picture from "../../static/media/me-2020-1200x1597.jpg";
import React from "react";
import Hyperlink from "../../components/Hyperlink";
import {Link} from "react-router-dom";
import MergeIcon from '@mui/icons-material/Merge';
import Version from "../../version";

export default function About() {
    return (
        <CenteredContent>
            <Contact>
                <ProfileImage src={profile_picture} alt="This is me" width="282" height="375"/>
                <h2>Rob van der Leek</h2>
                <span className="icons">
                    <Hyperlink href="https://twitter.com/robvanderleek"><i className="fab fa-x-twitter"/></Hyperlink>
                    <Hyperlink href="https://mastodon.social/@robvanderleek"><i
                        className="fab fa-mastodon"/></Hyperlink>
                    <Hyperlink href="https://www.linkedin.com/in/rob-van-der-leek-66596962"><i
                        className="fab fa-linkedin"/></Hyperlink>
                    <Hyperlink href="https://medium.com/@robvanderleek"><i className="fab fa-medium"/></Hyperlink>
                    <Hyperlink href="https://github.com/robvanderleek"><i className="fab fa-github"/></Hyperlink>
                    <Hyperlink href="https://dev.to/robvanderleek/"><i className="fab fa-dev"/></Hyperlink>
                    <Hyperlink href="https://stackoverflow.com/users/4232558/rob-van-der-leek"><i
                        className="fab fa-stack-overflow"/></Hyperlink>
                    <Hyperlink href="https://www.instagram.com/robvanderleek"><i
                        className="fab fa-instagram"/></Hyperlink>
                    <Hyperlink href="https://unsplash.com/@robvanderleek"><i
                        className="fab fa-unsplash"/></Hyperlink>
                    <Hyperlink href="https://www.buymeacoffee.com/robvanderleek"><i
                        className="fas fa-mug-hot"/></Hyperlink>
                </span>
                <span className="version">
                    <Hyperlink href="https://github.com/robvanderleek/robvanderleek.github.io">
                        <MergeIcon fontSize={'small'}
                                   sx={{position: 'relative', top: '4px'}}/> {Version.gitSha.substring(0, 8)}
                    </Hyperlink>
                </span>
            </Contact>
            <Info>
                <p><Hyperlink href="https://registry.jsonresume.org/robvanderleek">Lives and works in The
                    Netherlands.</Hyperlink></p>
                <p><Hyperlink href="https://www.dropbox.com/s/4cmayfumnvzlzml/thesis.pdf?dl=0">Studied Computer Science
                    at Delft University of Technology.</Hyperlink></p>
                <p><Hyperlink href="https://keplervision.eu">Currently working at a Computer
                    Vision Machine Learning startup in Amsterdam.</Hyperlink></p>
                <p><Hyperlink href="https://www.amazon.com/s?i=stripbooks&rh=p_27%3ARob+van+der+Leek">Passion for
                    software quality and software minimalism.</Hyperlink></p>
                <p><Link to="/portfolio">Side projects are on the Portfolio page.</Link></p>
                <p>
                    <Link to="/gists">Short technical writings are on the Gists page</Link>
                    <Hyperlink href="https://dev.to/robvanderleek/">, and dev.to.</Hyperlink>&nbsp;
                </p>
                <p>
                    <Hyperlink href="https://robvanderleek.medium.com/">Longer reads are on Medium.</Hyperlink>
                </p>
                <p><Hyperlink
                    href="https://twitter.com/robvanderleek/status/1104328624218562561?s=20&t=SVuMvYeL2DKFfMVzwCkJ4w">Done
                    some of his best development work under the shower.</Hyperlink></p>
            </Info>
        </CenteredContent>
    );
}

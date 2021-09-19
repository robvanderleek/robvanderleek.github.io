import {Contact, Info, ProfileImage} from "../../App.style";
import profile_picture from "../../static/media/me-2020-1200x1597.jpg";
import React from "react";
import {AboutArea} from "./About.style";
import Hyperlink from "../../components/Hyperlink";
import {Link} from "react-router-dom";
import resume from "../../static/media/Resume-Rob-van-der-Leek.pdf"

export default function About() {
    return (
        <AboutArea>
            <Contact>
                <ProfileImage src={profile_picture} alt="This is me" width="282" height="375"/>
                <h2>Rob van der Leek</h2>
                <p><a href="mailto:robvanderleek@gmail.com">robvanderleek@gmail.com</a></p>
                <span className="icons">
                    <Hyperlink href="https://twitter.com/robvanderleek"><i className="fab fa-twitter"/></Hyperlink>
                    <Hyperlink href="https://www.linkedin.com/in/rob-van-der-leek-66596962"><i
                        className="fab fa-linkedin"/></Hyperlink>
                    <Hyperlink href="https://medium.com/@robvanderleek"><i className="fab fa-medium"/></Hyperlink>
                    <Hyperlink href="https://github.com/robvanderleek"><i className="fab fa-github"/></Hyperlink>
                    <Hyperlink href="https://stackoverflow.com/users/4232558/rob-van-der-leek"><i
                        className="fab fa-stack-overflow"/></Hyperlink>
                    <Hyperlink href="https://www.instagram.com/robvanderleek"><i
                        className="fab fa-instagram"/></Hyperlink>
                </span>
            </Contact>
            <Info>
                <p><Hyperlink href={resume}>Lives and works in The Netherlands.</Hyperlink></p>
                <p><Hyperlink href="https://www.dropbox.com/s/3xbw5atzmxuarl5/thesis.pdf?dl=0">Studied Computer Science
                    at Delft University of Technology.</Hyperlink></p>
                <p><Hyperlink href="https://keplervision.eu">Currently working at a Computer
                    Vision Machine Learning startup in Amsterdam.</Hyperlink></p>
                <p><Hyperlink href="https://www.amazon.com/s?i=stripbooks&rh=p_27%3ARob+van+der+Leek">Passion for
                    software quality and software minimalism.</Hyperlink></p>
                <p><Link to="/portfolio">Side projects are on the Portfolio page.</Link></p>
                <p><Link to="/gists">Short technical writings are on the Gists page.</Link></p>
                <p>Done some of his best development work under the shower.</p>
            </Info>
        </AboutArea>
    );
}
import {Contact, Info, ProfileImage} from "../App.style";
import profile_picture from "../static/media/me-2020-1200x1597.jpg";
import React from "react";
import {AboutArea} from "./About.style";

export default function About() {
    return (
        <AboutArea>
            <Contact>
                <ProfileImage src={profile_picture} alt="This is me" height="375"/>
                <h2>Rob van der Leek</h2>
                <p><a href="mailto:robvanderleek@gmail.com">robvanderleek@gmail.com</a></p>
                <span className="icons">
                    <a href="https://twitter.com/robvanderleek"><i className="fab fa-twitter"/></a>
                    <a href="https://www.linkedin.com/in/rob-van-der-leek-66596962"><i className="fab fa-linkedin"/></a>
                    <a href="https://medium.com/@robvanderleek"><i className="fab fa-medium"/></a>
                    <a href="https://github.com/robvanderleek"><i className="fab fa-github"/></a>
                </span>
            </Contact>
            <Info>
                <p>Software engineer. Lives and works in The Netherlands. Studied Computer Science at Delft
                    University of Technology. Currently working at a <a href="https://keplervision.eu" target="_blank"
                                                                        rel="noopener noreferrer">Computer Vision
                        Machine Learning startup in Amsterdam</a>. Passion for software quality and software minimalism.
                    I've done some of my best development work under the shower.</p>
            </Info>
        </AboutArea>
    );
}
import React from 'react';
import './App.css';
import {Contact, Info, Main} from "./App.style";
import profile_picture from './static/media/me-2020-1200x1597.jpg';

function App() {
    return (
        <div>
            <Main>
                <Contact>
                    <img src={profile_picture} alt="This is me" height="375"/>
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
                    <h2>About</h2>
                    <p>Software engineer. Lives and works in The Netherlands. Studied Computer Science at Delft
                        University of Technology. Currently working at a Computer Vision Machine Learning startup
                        in Amsterdam. Passion for software quality and software minimalism. I've done some of my best
                        development work under the shower.</p>
                </Info>
            </Main>
        </div>
    );
}

export default App;

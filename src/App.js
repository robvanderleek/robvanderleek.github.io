import React, {useEffect, useState} from 'react';
import './App.css';
import {Content, Main} from "./App.style";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import About from "./About";
import Portfolio from "./Portfolio";
import {Link, Route, Switch} from "react-router-dom";

function App() {
    const [value, setValue] = useState(0);

    useEffect(() => {
        if (window.location.hash === '#/portfolio') {
            setValue(1);
        }
    }, []);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Main>
            <AppBar position="absolute">
                <Tabs value={value} onChange={handleChange} centered>
                    <Tab label="About" to="/" component={Link} disabled={value === 0}/>
                    <Tab label="Portfolio" to="/portfolio" component={Link} disabled={value === 1}/>
                </Tabs>
            </AppBar>
            <Content>
                <Switch>
                    <Route exact path='/portfolio' component={Portfolio}/>
                    <Route component={About}/>
                </Switch>
            </Content>
        </Main>
    );
}

export default App;

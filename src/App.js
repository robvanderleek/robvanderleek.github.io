import React, {useEffect, useState} from 'react';
import './App.css';
import {Content, Main} from "./App.style";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import About from "./About";
import Portfolio from "./Portfolio";
import {Route, Switch} from "react-router-dom";
import history from './history';

function App() {
    const [value, setValue] = useState(0);

    useEffect(() => {
        if (history.location.pathname === '/portfolio') {
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
                    <Tab label="About" onClick={() => history.push('/')}/>
                    <Tab label="Portfolio" onClick={() => history.push('/portfolio')}/>
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

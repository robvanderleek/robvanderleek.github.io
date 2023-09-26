import React, {ChangeEvent, useEffect, useState} from 'react';
import './App.css';
import {Main} from "./App.style";
import About from "./pages/about/About";
import Portfolio from "./pages/portfolio/Portfolio";
import {Link, Route, Switch, useLocation} from "react-router-dom";
import Gists from "./pages/gists/Gists";
import {AppBar, Tab, Tabs} from "@mui/material";

function App() {
    const [value, setValue] = useState(0);
    const location = useLocation();

    useEffect(() => {
        if (location.pathname === '/portfolio') {
            setValue(1);
        } else if (location.pathname === '/gists') {
            setValue(2);
        } else {
            setValue(0);
        }
    }, [location]);

    const handleChange = (_: ChangeEvent<{}>, newValue: number) => {
        window.scrollTo(0, 0);
        setValue(newValue);
    };

    return (
        <Main>
            <AppBar>
                <Tabs value={value} onChange={handleChange} centered>
                    <Tab label="About" to="/" component={Link} disabled={value === 0}/>
                    <Tab label="Portfolio" to="/portfolio" component={Link} disabled={value === 1}/>
                    <Tab label="Gists" to="/gists" component={Link} disabled={value === 2}/>
                </Tabs>
            </AppBar>
            <Switch>
                <Route exact path='/portfolio' component={Portfolio}/>
                <Route exact path='/gists' component={Gists}/>
                <Route component={About}/>
            </Switch>
        </Main>
    );
}

export default App;
